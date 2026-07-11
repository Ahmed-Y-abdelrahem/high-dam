"use client";

import { usePathname } from "next/navigation";

/**
 * Custom hook for active path detection
 * @returns {Object} - { pathname, isActive, isParentActive }
 */
export function useActivePath() {
  const pathname = usePathname();
  
  const isActive = (href) => pathname === href;
  const isParentActive = (href) => pathname.startsWith(href);
  
  return { pathname, isActive, isParentActive };
}