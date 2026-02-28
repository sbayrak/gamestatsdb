import { HEADER_HEIGHT_PX } from "@/shared/constants";
import SearchResultItem from "./search-result-item";
import { useSearchResults } from "./use-search-results";
import { X } from "lucide-react";

interface SearchResultsProps {
  query: string;
  onClose?: () => void;
}

export default function SearchResults({ query, onClose }: SearchResultsProps) {
  const { data: results = [], isLoading } = useSearchResults(query);

  return (
    <div
      className="w-screen bg-[#0E141B] border-t border-slate-800/50 overflow-y-auto shadow-2xl relative"
      style={{ height: `calc(100vh - ${HEADER_HEIGHT_PX})` }}
      onMouseDown={(e) => {
        // Prevent clicking inside the search results from triggering onBlur on the input
        if (
          (e.target as HTMLElement).tagName !== "BUTTON" &&
          !(e.target as HTMLElement).closest("button")
        ) {
          e.preventDefault();
        }
      }}
    >
      <div className="max-w-5xl mx-auto px-4 py-8 relative">
        {/* Desktop ESC instruction */}
        <div className="hidden md:flex justify-center items-center space-x-2 text-slate-500 text-xs leading-none mb-8">
          <span>Press</span>
          <kbd className="bg-slate-800/80 px-2 py-1 rounded text-slate-300 border border-slate-700 font-mono shadow-sm">
            ESC
          </kbd>
          <span>to close</span>
        </div>

        {/* Mobile close button */}
        <button
          className="md:hidden absolute top-0 right-4 p-2 text-slate-400 hover:text-white bg-slate-800/50 rounded-full cursor-pointer z-10"
          onClick={() => {
            if (onClose) onClose();
          }}
          aria-label="Close search results"
        >
          <X size={20} />
        </button>

        {!query && (
          <div className="text-slate-500 text-center mt-20 text-lg">
            Enter a game name to search...
          </div>
        )}

        {isLoading && query && (
          <div className="flex justify-center mt-20">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-slate-400"></div>
          </div>
        )}

        {!isLoading && query && results.length === 0 && (
          <div className="text-slate-500 text-center mt-20 text-lg flex flex-col items-center">
            <span className="text-3xl mb-4 text-slate-700">🔍</span>
            <span>No games found for &quot;{query}&quot;</span>
          </div>
        )}

        {!isLoading && results.length > 0 && (
          <div className="flex flex-col gap-1">
            {results.map((app) => (
              <SearchResultItem key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
