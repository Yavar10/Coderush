import { useState } from "react";
import FullscreenMenu from "./Menu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-black/10 bg-zinc-50/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 items-center justify-between px-6 md:px-10">
          <h1 className="font-anton text-3xl leading-none tracking-tight">
            CODE RUSH 3.0
          </h1>

          <div className="flex items-center gap-6">
            <button className="group relative overflow-hidden border border-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em]">
              <span className="relative z-10">Register</span>

              <div className="absolute inset-0 -translate-x-full bg-black transition duration-500 group-hover:translate-x-0" />

              <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 transition duration-500 group-hover:opacity-100">
                Register
              </span>
            </button>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative h-8 w-8 cursor-pointer"
              aria-label="Toggle Menu"
            >
              <span
                className={`absolute left-0 h-[2px] w-full bg-black transition-all duration-500 ease-in-out
                ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 rotate-45"
                    : "top-2"
                }`}
              />

              <span
                className={`absolute left-0 h-[2px] w-full bg-black transition-all duration-500 ease-in-out
                ${
                  menuOpen
                    ? "top-1/2 -translate-y-1/2 -rotate-45"
                    : "top-5"
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <FullscreenMenu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;