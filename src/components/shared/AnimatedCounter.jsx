"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    
    let start = 0;
    const end = value;
    const duration = 1500; 
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplay(end);
        clearInterval(timer);
      } else {
        setDisplay(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-mono">
      {display}
      {suffix}
    </span>
  );
}

export default function AnimatedCounter({ value, suffix }) {
  return <Counter value={value} suffix={suffix} />;
}