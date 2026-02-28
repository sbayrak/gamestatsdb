import { useEffect, RefObject } from "react";

export function useEscapeKey<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T | null>,
  onEscape: () => void,
  isEnabled: boolean = true,
) {
  useEffect(() => {
    if (!isEnabled || !ref.current) return;

    const element = ref.current;

    // We explicitly cast to match whatever DOM format we expect
    const handleKeyDown = (e: KeyboardEvent | Event) => {
      // It's technically possible for synthetic evts, so cast down.
      if ((e as KeyboardEvent).key === "Escape") {
        onEscape();
      }
    };

    element.addEventListener("keydown", handleKeyDown);
    return () => element.removeEventListener("keydown", handleKeyDown);
  }, [ref, onEscape, isEnabled]);
}
