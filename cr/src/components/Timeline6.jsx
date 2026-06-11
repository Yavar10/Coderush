import { useLayoutEffect, useRef ,useEffect} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const events = [
  { lane: "01", time: "10:00 AM", title: "Registration" },
  { lane: "02", time: "12:00 PM", title: "Inaugural Ceremony" },
  { lane: "03", time: "2:00 PM", title: "Relay Race" },
  { lane: "04", time: "6:00 PM", title: "Elimination (3v3)" },
  { lane: "05", time: "12:00 AM", title: "Jamming Session" },
  { lane: "06", time: "9:00 AM", title: "Javelin" },
  { lane: "07", time: "4:00 PM", title: "Closing Ceremony" },
];

export default function Timeline6() {
  const sectionRef = useRef(null);

  useEffect(() => {
  const checkpoints = document.querySelectorAll(".checkpoint");

  checkpoints.forEach((cp) => {
    const enter = () => {
      cp.classList.add("checkpoint-fire");
    };

    const leave = () => {
      cp.classList.remove("checkpoint-fire");
    };

    cp.addEventListener("mouseenter", enter);
    cp.addEventListener("mouseleave", leave);

    cp._enter = enter;
    cp._leave = leave;
  });

  return () => {
    checkpoints.forEach((cp) => {
      cp.removeEventListener("mouseenter", cp._enter);
      cp.removeEventListener("mouseleave", cp._leave);
    });
  };
}, []);


  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".track-lane", {
        x: -100,
        opacity: 0,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#timeline6",
          start: "top 75%",
        },
      });

      gsap.utils.toArray(".checkpoint").forEach((point) => {
        gsap.to(point, {
          boxShadow:
            "0 0 20px rgba(212,175,55,.6),0 0 50px rgba(212,175,55,.4)",
          repeat: -1,
          yoyo: true,
          duration: 1.8,
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="timeline"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07111F] py-20 md:py-32"
    >
      {/* Lighting */}
      <div className="absolute -top-40 left-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] md:h-[500px] md:w-[500px] rounded-full bg-[#D4AF37]/10 blur-[140px]" />

      {/* Laurel */}
      <img
        src="/laurel-gold.png"
        alt=""
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          w-[300px]
          md:w-[800px]
          -translate-x-1/2
          -translate-y-1/2
          opacity-[0.03]
        "
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div className="mb-14 md:mb-24 text-center">
          <p className="mb-4 text-xs sm:text-sm uppercase tracking-[0.35em] md:tracking-[0.5em] text-[#D4AF37]">
            CodeRush Events Schedule
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-8xl font-black uppercase text-white">
            Race Track
          </h2>
        </div>

        {/* Track */}
        <div
          className="
            relative
            mx-auto
            max-w-6xl
            overflow-hidden
            rounded-[2rem]
            md:rounded-[4rem]
            border-4
            border-white/20
            bg-[#A64B3C]
            shadow-[0_0_80px_rgba(0,0,0,.35)]
          "
        >
          {/* Texture */}
          <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[length:18px_18px]" />

          {/* Events */}
          <div className="relative z-10">
            
            {events.map((event) => (
              <div
                key={event.lane}
                className="
                  track-lane
                  relative
                  border-b-2
                  border-white/30

                  px-4
                  py-6

                  md:min-h-[170px]
                  md:px-16
                  md:py-0
                  md:flex
                  md:items-center
                "
              >
                {/* Background Number */}
                <div
                  className="
                    absolute
                    right-2
                    top-2

                    text-[4rem]
                    md:text-[12rem]

                    font-black
                    leading-none
                    text-white/5
                    select-none
                  "
                >
                  {event.lane}
                </div>

                {/* Mobile */}
                <div className="md:hidden relative z-10">
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="
                        checkpoint
                        h-5
                        w-5
                        rounded-full
                        border-2
                        border-white
                        bg-[#D4AF37]
                        shrink-0
                      "
                    />

                    <span className="text-xs tracking-[0.2em] text-[#F5D57A] uppercase">
                      {event.time}
                    </span>
                  </div>

                  <h3 className="text-xl font-black uppercase text-white">
                    {event.title}
                  </h3>
                </div>

                {/* Desktop */}
                <div
                  className="
                    hidden
                    md:flex
                    relative
                    z-10
                    w-full
                    items-center
                    gap-4
                  "
                >
                  <span
                    className="
                      min-w-[90px]
                      text-lg
                      font-black
                      tracking-[0.25em]
                      text-white/80
                    "
                  >
                    {event.lane}
                  </span>

                  <div className="h-[3px] flex-1 bg-white/60" />

                  <div
                    className="
                      checkpoint
                      h-6
                      w-6
                      rounded-full
                      border-2
                      border-white
                      bg-[#D4AF37]
                    "
                  />

                  <div className="min-w-[280px]">
                    <h3
                      className="
                        text-2xl
                        lg:text-4xl
                        font-black
                        uppercase
                        text-white
                      "
                    >
                      {event.title}
                    </h3>

                    <p
                      className="
                        mt-2
                        tracking-[0.25em]
                        text-[#F5D57A]
                      "
                    >
                      {event.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Finish */}
          <div
            className="
              relative
              flex
              min-h-[180px]
              md:h-44
              items-center
              justify-center
              overflow-hidden
              px-4
              py-10
            "
          >
            <div className="text-center">
              <div className="mb-4 text-5xl md:text-6xl">🏆</div>

              <h3 className="text-3xl md:text-6xl font-black uppercase text-white">
                Finish Line
              </h3>

              <p
                className="
                  mt-3
                  text-xs
                  md:text-base
                  tracking-[0.2em]
                  md:tracking-[0.3em]
                  text-[#F5D57A]
                  uppercase
                "
              >
                Closing Ceremony & Felicitation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}