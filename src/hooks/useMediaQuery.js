"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook for responsive media queries
 * @param {string} query - Media query string
 * @returns {boolean} - True if query matches
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    setMatches(media.matches);
    
    const listener = (e) => setMatches(e.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}