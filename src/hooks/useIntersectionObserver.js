"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for Intersection Observer
 * @param {Object} options - Observer options
 * @returns {Object} - { ref, isVisible }
 */
export function useIntersectionObserver(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.1, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isVisible };
}