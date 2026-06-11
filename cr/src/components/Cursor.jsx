import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    // Disable on touch devices
    if (
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    const colors = [
      "#DF0024", // red
      "#0085C7", // blue
      "#009F3D", // green
      "#F4C300", // yellow
      "#000000", // black
      "#FFFFFF", // white
    ];

    let colorIndex = 0;

    const move = (e) => {
      gsap.to(dotRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: "none",
      });

      gsap.to(ringRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.35,
        ease: "power3.out",
      });
    };

    const colorInterval = setInterval(() => {
      const color = colors[colorIndex];

      gsap.to(dotRef.current, {
        backgroundColor: color,
        duration: 2,
      });

      gsap.to(ringRef.current, {
        borderColor: color,
        duration: 2,
      });

      colorIndex = (colorIndex + 1) % colors.length;
    }, 2500);

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
      clearInterval(colorInterval);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        style={{ borderColor: "#DF0024" }}
        className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 pointer-events-none z-[99999] -translate-x-1/2 -translate-y-1/2"
      />

      <div
        ref={dotRef}
        style={{ backgroundColor: "#DF0024" }}
        className="fixed top-0 left-0 w-3 h-3 rounded-full pointer-events-none z-[100000] -translate-x-1/2 -translate-y-1/2"
      />
    </>
  );
}