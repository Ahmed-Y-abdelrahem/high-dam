"use client";

import { useEffect, useState } from "react";

/**
 * Custom hook to track scroll position
 * @param {number} threshold - Scroll threshold in pixels (default: 20)
 * @returns {boolean} - True if scrolled past threshold
 */
export function useScrollPosition(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return scrolled;
}