import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const sponsors = [
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
  "/logo.png",
];

const ringColors = [
  "#0085C7", // Blue
  "#F4C300", // Yellow
  "#000000", // Black
  "#009F3D", // Green
  "#DF0024", // Red
];

function SponsorRing({ src, index }) {
  return (
    <div
      className="
        sponsor-ring
        flex-shrink-0
        flex
        items-center
        justify-center
        h-36
        w-36
        md:h-44
        md:w-44
        rounded-full
        border-[6px]
        bg-white
        shadow-lg
        mx-8
      "
      style={{
        borderColor: ringColors[index % ringColors.length],
      }}
    >
      <img
        src={src}
        alt="Sponsor"
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  );
}

export default function Sponsors() {
  const row1 = useRef(null);
  const row2 = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // floating animation
      gsap.to(".sponsor-ring", {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: 0.1,
      });

      // continuous row movement
      gsap.to(row1.current, {
        x: "-50%",
        duration: 30,
        ease: "none",
        repeat: -1,
      });

      gsap.fromTo(
        row2.current,
        { x: "-50%" },
        {
          x: "0%",
          duration: 30,
          ease: "none",
          repeat: -1,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const duplicatedSponsors = [...sponsors, ...sponsors];

  return (
    <section
      id="sponsors"
      className="
        relative
        overflow-hidden
        bg-[#F8F6F1]
        py-24
        md:py-32
      "
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-10 top-20 w-72 h-72 rounded-full bg-blue-100 blur-3xl opacity-40" />
        <div className="absolute right-10 bottom-20 w-72 h-72 rounded-full bg-yellow-100 blur-3xl opacity-40" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="text-center mb-20 px-6">
          <p className="text-sm font-bold tracking-[0.5em] text-[#8C6A1A]">
            OUR PARTNERS
          </p>

          <h2 className="mt-4 text-5xl md:text-7xl font-black uppercase text-[#111827]">
            Sponsors
          </h2>

          <div className="mt-8 flex justify-center gap-3">
            <span className="w-4 h-4 rounded-full bg-[#0085C7]" />
            <span className="w-4 h-4 rounded-full bg-[#F4C300]" />
            <span className="w-4 h-4 rounded-full bg-black" />
            <span className="w-4 h-4 rounded-full bg-[#009F3D]" />
            <span className="w-4 h-4 rounded-full bg-[#DF0024]" />
          </div>
        </div>

        {/* Row 1 */}
        <div className=" mb-12">
          <div ref={row1} className="flex w-max">
            {duplicatedSponsors.map((logo, index) => (
              <SponsorRing
                key={`top-${index}`}
                src={logo}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="">
          <div ref={row2} className="flex w-max">
            {duplicatedSponsors.map((logo, index) => (
              <SponsorRing
                key={`bottom-${index}`}
                src={logo}
                index={index + 2}
              />
            ))}
          </div>
        </div>

        {/* Be a Sponsor CTA */}
        <div className="mt-20 flex justify-center px-6">
          <a
            href="mailto:cpbyte@kiet.edu"
            className="group relative flex items-center gap-4 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B8860B] px-12 py-5 md:px-16 md:py-6 font-anton text-lg md:text-2xl uppercase tracking-[0.15em] text-white shadow-[0_0_40px_rgba(212,175,55,0.3)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] hover:scale-105"
          >
            Be a Sponsor
            <span className="inline-block transition-transform duration-500 group-hover:translate-x-2 text-2xl md:text-3xl">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}