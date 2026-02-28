import { Monitor, Apple, Gamepad2 } from "lucide-react";

export interface SteamApp {
  id: number;
  name: string;
  tiny_image: string;
  platforms?: { windows: boolean; mac: boolean; linux: boolean };
}

interface SearchResultItemProps {
  app: SteamApp;
}

export default function SearchResultItem({ app }: SearchResultItemProps) {
  return (
    <div className="flex items-center space-x-4 py-4 border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors cursor-pointer group px-4 rounded-md">
      <div className="relative w-28 h-12 md:w-36 md:h-16 flex-shrink-0 bg-slate-800 rounded-md overflow-hidden">
        <img
          src={app.tiny_image}
          alt={app.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col flex-grow justify-center">
        <div className="flex items-baseline space-x-2">
          <h3 className="text-white font-bold text-lg leading-tight">
            {app.name}
          </h3>
        </div>
      </div>

      <div className="flex items-center space-x-2 text-slate-500">
        {app.platforms?.windows && <Monitor size={16} />}
        {app.platforms?.mac && <Apple size={16} />}
        {app.platforms?.linux && <Gamepad2 size={16} />}
      </div>
    </div>
  );
}
