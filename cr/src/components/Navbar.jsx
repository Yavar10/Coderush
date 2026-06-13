import { useCallback, useEffect, useState } from "react";
import FullscreenMenu from "./Menu";
import { SiUnstop } from "react-icons/si";

const olympicColors = ["#0085C7", "#F4C300", "#009F3D", "#DF0024","#000000"];

const sections = [
  { id: "about", label: "About" },
  { id: "eligibility", label: "Eligibility" },
  { id: "timeline", label: "Timeline" },
  { id: "sponsors", label: "Sponsors" },
  { id: "venue", label: "Venue" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Detect active section on scroll
  const handleScroll = useCallback(() => {
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i].id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 150) {
          setActiveSection(sections[i].id);
          return;
        }
      }
    }
    setActiveSection("");
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full">
        {/* Main navbar container */}
        <div className="bg-zinc-50/90 backdrop-blur-sm border-b border-black/5">
          <div className="mx-auto flex items-center justify-between px-6 md:px-10 h-18">
            {/* Logo */}
            <a
              href="#home"
              className="group flex items-center gap-3"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#home")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <div className="relative">
                <h1 className="font-anton text-3xl leading-none tracking-tight">
                  <span className="text-zinc-900">CODE</span>
                  <span className="text-zinc-900"> RUSH</span>
                  <span className="text-[#D4AF37] ml-1.5">3.0</span>
                </h1>
              </div>
            </a>

            {/* Center: Section links with Olympic accent bar (desktop only) */}
            <div className="hidden lg:flex items-center gap-0">
              {sections.map((section, i) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(`#${section.id}`)?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="group relative px-4 py-2"
                >
                  <span
                    className={`
                      text-[10px] font-semibold uppercase tracking-[0.2em]
                      transition-colors duration-300
                      ${
                        activeSection === section.id
                          ? "text-zinc-900"
                          : "text-zinc-400 group-hover:text-zinc-700"
                      }
                    `}
                  >
                    {section.label}
                  </span>

                  {/* Single-color underline bar */}
                  <div
                    className={`
                      absolute bottom-0 left-2 right-2 h-[2px] rounded-full
                      transition-all duration-500
                      ${
                        activeSection === section.id
                          ? "opacity-100 scale-x-100"
                          : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100"
                      }
                    `}
                    style={{ backgroundColor: olympicColors[i % olympicColors.length] }}
                  />
                </a>
              ))}
            </div>

            {/* Right: CTA + Hamburger */}
            <div className="flex items-center gap-4 md:gap-5">
              {/* Register button */}
              <a
                href="https://unstop.com"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center justify-center gap-2 cursor-hover group relative overflow-hidden border border-black/80 text-[9px] md:text-[10px] font-semibold uppercase tracking-[0.2em] px-4 py-2 md:px-5 md:py-2.5"
              >
                <SiUnstop className="h-4 w-4" />
                <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                  Register
                </span>
                <div className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 ease-[cubic-bezier(.77,0,.18,1)] group-hover:translate-x-0" />
              </a>

              {/* Hamburger button */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="relative cursor-hover h-8 w-8"
                aria-label="Toggle Menu"
              >
                <span
                  className={`
                    absolute left-0 h-[2px] bg-black
                    transition-all duration-500 ease-[cubic-bezier(.77,0,.18,1)]
                    ${
                      menuOpen
                        ? "top-1/2 w-full -translate-y-1/2 rotate-45"
                        : "top-[25%] w-full"
                    }
                  `}
                />
                <span
                  className={`
                    absolute left-0 h-[2px] bg-black
                    transition-all duration-500 ease-[cubic-bezier(.77,0,.18,1)]
                    ${
                      menuOpen
                        ? "top-1/2 w-full -translate-y-1/2 -rotate-45"
                        : "top-[65%] w-full"
                    }
                  `}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;