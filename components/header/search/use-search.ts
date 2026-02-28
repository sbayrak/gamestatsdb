import { useState, useCallback, useRef, ChangeEvent } from "react";
import { useDebounce, useEscapeKey } from "@/shared";

export function useSearch() {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedTerm = useDebounce(searchTerm, 1000);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setIsFocused(false);
    inputRef.current?.blur();
  }, []);

  useEscapeKey(inputRef, handleClose, isFocused);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    // Adding a slight delay to allow onMouseDown on results to process e.preventDefault()
    setTimeout(() => setIsFocused(false), 200);
  }, []);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  const handleClear = useCallback(() => {
    setSearchTerm("");
    inputRef.current?.focus();
  }, []);

  return {
    isFocused,
    searchTerm,
    debouncedTerm,
    inputRef,
    handleFocus,
    handleBlur,
    handleChange,
    handleClose,
    handleClear,
  };
}
