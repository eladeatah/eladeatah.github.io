import React, { useState, useEffect } from "react";

export default function CursorCoords() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => setCoords({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 z-50 font-mono text-[10px] text-concrete/50 pointer-events-none hidden md:block">
      <span>X:{String(coords.x).padStart(4, "0")}</span>
      <span className="ml-2">Y:{String(coords.y).padStart(4, "0")}</span>
    </div>
  );
}