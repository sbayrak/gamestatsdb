"use client";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { SearchIcon, X } from "lucide-react";
import { Fragment } from "react";
import SearchResults from "./search-results/search-results";
import { HEADER_HEIGHT_PX } from "@/shared";
import { useSearch } from "./use-search";

export default function Search() {
  const {
    isFocused,
    searchTerm,
    debouncedTerm,
    inputRef,
    handleFocus,
    handleBlur,
    handleChange,
    handleClose,
    handleClear,
  } = useSearch();

  return (
    <Fragment>
      <InputGroup>
        <InputGroupInput
          ref={inputRef}
          placeholder="Search..."
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={searchTerm}
          onChange={handleChange}
        />
        <InputGroupAddon>
          <SearchIcon data-testid="search-icon" />
        </InputGroupAddon>
        {searchTerm && (
          <InputGroupAddon align="inline-end">
            <X
              data-testid="search-clear"
              className="cursor-pointer text-slate-400 hover:text-white transition-colors"
              size={18}
              onMouseDown={(e) => {
                e.preventDefault();
                handleClear();
              }}
            />
          </InputGroupAddon>
        )}
      </InputGroup>
      {isFocused && (
        <div
          className={`fixed left-0 top-0 w-full z-50`}
          style={{ marginTop: HEADER_HEIGHT_PX }}
        >
          <SearchResults query={debouncedTerm} onClose={handleClose} />
        </div>
      )}
    </Fragment>
  );
}
