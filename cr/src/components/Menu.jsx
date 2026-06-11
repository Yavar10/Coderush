import { useState } from "react";

const menuItems = [
  {
    label: "HOME",
    color: "#ef4444",
    path: "M20 80 C150 0,250 110,450 60 S780 30,980 70",
  },
  {
    label: "TIMELINE",
    color: "#3b82f6",
    path: "M20 90 Q200 0 500 70 T980 40",
  },
  {
    label: "ELIGIBILITY",
    color: "#eab308",
    path: "M20 50 C250 120,300 0,500 60 S700 120,980 30",
  },
  {
    label: "ABOUT",
    color: "#22c55e",
    path: "M20 80 C150 30,350 100,550 40 S850 10,980 80",
  },
  {
    label: "SPONSORS",
    color: "#ef4444",
    path: "M20 70 C180 20,400 110,600 40 S850 120,980 60",
  },
  {
    label: "REGISTER",
    color: "#3b82f6",
    path: "M20 90 C200 20,350 100,600 50 S900 10,980 70",
  },
];

export default function FullscreenMenu({
  isOpen,
  onClose,
}) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="fixed inset-0 z-40 pointer-events-none">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/10 backdrop-blur-[2px] transition-all duration-500 ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "opacity-0"
        }`}
      />

      {/* Menu Panel */}
      <div
        className={`
          absolute right-0 top-0 h-full
          w-full md:w-[45vw] lg:w-[40vw]
          bg-[#f7f7f4]
          border-l border-black/10
          shadow-[-20px_0_60px_rgba(0,0,0,0.08)]
          transition-all duration-700
          ease-[cubic-bezier(.77,0,.18,1)]
          ${
            isOpen
              ? "pointer-events-auto [clip-path:inset(0_0_0_0)]"
              : "[clip-path:inset(0_0_0_100%)]"
          }
        `}
      >
        <div className="flex h-full max-w-[420px] flex-col justify-center px-6 sm:px-8 md:max-w-none md:px-16 lg:px-20">
          {menuItems.map((item, index) => (
            <button
              key={item.label}
              onMouseEnter={() => setHovered(index)}
              onMouseLeave={() => setHovered(null)}
              className={`
                group relative flex items-center gap-3 md:gap-4 text-left
                transition-all duration-700

                ${
                  index === 0
                    ? "mb-8 md:mb-14"
                    : index === menuItems.length - 1
                    ? "mt-8 md:mt-14"
                    : "mb-1 md:mb-2"
                }

                ${
                  isOpen
                    ? "translate-x-0 opacity-100"
                    : "translate-x-20 opacity-0"
                }
              `}
              style={{
                transitionDelay: isOpen
                  ? `${index * 80}ms`
                  : "0ms",
              }}
            >
              {/* Target Icon */}

              <svg
                width="20"
                height="20"
                viewBox="0 0 34 34"
                className={`hidden md:block shrink-0 transition-all duration-300 ${
                  hovered === index
                    ? "text-black"
                    : "text-gray-400"
                }`}
              >
                <circle
                  cx="17"
                  cy="17"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                />
                <circle
                  cx="17"
                  cy="17"
                  r="3"
                  fill="currentColor"
                />
              </svg>

              {/* Text */}

              <span
                className={`
                  relative z-10
                  font-anton
                  text-[1.9rem]
                  sm:text-[2.4rem]
                  md:text-[3.5rem]
                  lg:text-[4rem]
                  leading-none
                  transition-all duration-300
                  ${
                    hovered === index
                      ? "text-black"
                      : "text-gray-300"
                  }
                `}
              >
                {item.label}
              </span>

              {/* Marker Scribble */}

              <svg
                className="
                  pointer-events-none
                  absolute
                  left-0
                  md:left-8
                  top-1/2
                  z-20
                  h-16
                  md:h-20
                  w-full
                  -translate-y-1/2
                "
                viewBox="0 0 1000 120"
              >
                {/* Main stroke */}

                <path
                  d={item.path}
                  fill="none"
                  stroke={item.color}
                  strokeWidth="8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 1400,
                    strokeDashoffset:
                      hovered === index
                        ? 0
                        : 1400,
                    opacity:
                      hovered === index
                        ? 1
                        : 0,
                    transition:
                      "stroke-dashoffset .8s cubic-bezier(.77,0,.18,1), opacity .25s",
                  }}
                />

                {/* Sketch overlay */}

                <path
                  d={item.path}
                  transform="translate(0,-4)"
                  fill="none"
                  stroke={item.color}
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{
                    strokeDasharray: 1400,
                    strokeDashoffset:
                      hovered === index
                        ? 0
                        : 1400,
                    opacity:
                      hovered === index
                        ? 0.65
                        : 0,
                    transition:
                      "stroke-dashoffset .9s cubic-bezier(.77,0,.18,1), opacity .25s",
                  }}
                />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}