import { Menu } from "lucide-react";

const Navbar = () => {

  return (
    <nav
      className="navbar fixed top-0 left-0 z-200 w-full border-b border-black/10 bg-zinc-50/90 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6 md:px-10">
        <h1 className="font-anton text-3xl leading-none tracking-tight">
          CODE RUSH
        </h1>

        <div className="flex items-center gap-6">
          <button className="group relative overflow-hidden border border-black px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em]">
            <span className="relative z-10">Register</span>

            <div className="absolute inset-0 -translate-x-full bg-black transition duration-500 group-hover:translate-x-0" />

            <span className="absolute inset-0 z-20 flex items-center justify-center text-white opacity-0 transition duration-500 group-hover:opacity-100">
              Register
            </span>
          </button>

          <button className="cursor-pointer">
            <Menu size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;