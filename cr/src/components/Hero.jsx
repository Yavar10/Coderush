import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
        gsap.set(".code", {
  yPercent: 110,
});

gsap.set(".rush", {
  yPercent: 110,
});
      const tl = gsap.timeline();

      tl.to(".overlay", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.1,
        ease: "power4.inOut",
      })

        .from(
          ".olympic",
          {
            y: "100%",
            stagger: 0.08,
            duration: 1.2,
            ease: "power4.out",
          },
          "-=0.5"
        )

        .from(
          ".logo",
          {
            y: -40,
            opacity: 0,
            duration: 1,
            ease: "power4.out",
          },
          "-=0.6"
        )

        .from(
          ".year",
          {
            opacity: 0,
            scale: 1.1,
            duration: 1.2,
            ease: "power3.out",
          },
          "-=0.8"
        )

        .to(
  ".code",
  {
    yPercent: 0,
    duration: 1.1,
    ease: "power4.out",
  },
  "-=0.8"
)

        .to(
  ".rush",
  {
    yPercent: 0,
    duration: 1.1,
    ease: "power4.out",
  },
  "-=0.85"
)

        .from(
          ".subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )

        .from(
          ".scroll",
          {
            opacity: 0,
            y: 20,
            duration: 0.8,
          },
          "-=0.4"
        )

        .from(
          ".color-segment",
          {
            scaleY: 0,
            transformOrigin: "bottom",
            stagger: 0.08,
            duration: 0.7,
            ease: "power4.out",
          },
          "-=0.6"
        );

      gsap.to(".pinstripes", {
        x: -60,
        duration: 10,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".year", {
        scale: 1.03,
        duration: 6,
        yoyo: false,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-zinc-50"
    >

      <div className="overlay absolute inset-0 z-[100] origin-top bg-black" />


      <div className="pinstripes absolute inset-0 bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_58px,rgba(0,0,0,0.08)_59px,transparent_60px)]" />


      <div className="absolute inset-0 flex opacity-[0.04] pointer-events-none">
        <div className="olympic w-1/4 bg-blue-500" />
        <div className="olympic w-1/4 bg-yellow-400" />
        <div className="olympic w-1/4 bg-green-500" />
        <div className="olympic w-1/4 bg-red-500" />
      </div>


      <div className="year absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="font-anton text-[28vw] leading-none text-black/[0.03]">
          2026
        </h1>
      </div>

     


      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <img
          src="/cr3.png"
          alt="Code Rush"
          className="logo mb-8 w-20 md:w-28"
        />

       <div className="overflow-hidden py-1">
  <h1 className="code font-anton text-[6rem] leading-[0.85] tracking-tight sm:text-[10rem] md:text-[14rem]">
            
            CODE
          </h1>
        </div>

       <div className="overflow-hidden py-1">
          <h1 className="rush font-anton text-[6rem] leading-[0.85] tracking-tight sm:text-[10rem] md:text-[14rem]">
            RUSH
          </h1>
        </div>

        <p className="subtitle mt-6 max-w-md text-[10px] uppercase tracking-[0.35em] text-zinc-500 sm:text-xs">
          THE ULTIMATE TEST OF COMPETITIVE PROGRAMMING
        </p>

        <div className="scroll absolute bottom-8 left-4 flex items-center gap-3 sm:left-10">
          <div className="h-px w-10 bg-zinc-500" />
          <p className="text-[10px] uppercase tracking-widest text-zinc-500">
            SCROLL TO COMPETE
          </p>
        </div>
      </div>


      <div className="fixed bottom-0 left-0 flex h-3 w-full overflow-hidden">
        <div className="color-segment w-1/4 bg-blue-500" />
        <div className="color-segment w-1/4 bg-yellow-400" />
        <div className="color-segment w-1/4 bg-green-500" />
        <div className="color-segment w-1/4 bg-red-500" />
      </div>
    </section>
  );
};

export default Hero;