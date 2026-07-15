import React, { useState, useEffect } from "react";

export default function TraceLine() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? scrollTop / docHeight : 0;
      setHeight(pct * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="trace-line"
      style={{ height: `${height}vh` }}
      aria-hidden="true"
    />
  );
}