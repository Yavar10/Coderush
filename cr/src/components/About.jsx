import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useInView } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const olympicColors = ["#0085C7", "#F4C300", "#009F3D", "#DF0024", "#000000"];

const pillars = [
  {
    number: "01",
    title: "ALGORITHMIC\nBATTLES",
    description:
      "Face off against the toughest competitive programming problems. Data structures, dynamic programming, graph theory — prove your mastery across every domain.",
    icon: "⚔️",
    color: "#0085C7",
  },
  {
    number: "02",
    title: "TEAM\nSTRATEGY",
    description:
      "Form alliances. Divide & conquer. CodeRush isn't just about individual skill — it's about coordinating under pressure in relay and 3v3 elimination rounds.",
    icon: "🏟️",
    color: "#F4C300",
  },
  {
    number: "03",
    title: "OLYMPIC\nSPIRIT",
    description:
      "Inspired by the greatest athletic traditions, CodeRush brings ceremony, rivalry, and honor to the competitive programming arena.",
    icon: "🔥",
    color: "#009F3D",
  },
  {
    number: "04",
    title: "GLORY &\nREWARDS",
    description:
      "₹50K+ prize pool, exclusive swag, certificates of excellence, and the coveted CodeRush Champion title await the victors.",
    icon: "🏆",
    color: "#DF0024",
  },
];

function AnimatedCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const countRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useLayoutEffect(() => {
    if (!isInView || !countRef.current) return;

    const obj = { val: 0 };
    gsap.to(obj, {
      val: parseInt(value),
      duration: 2,
      ease: "power2.out",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent =
            Math.floor(obj.val) + suffix;
        }
      },
    });
  }, [isInView, value, suffix]);

  return (
    <div ref={ref} className="text-center">
      <h3
        ref={countRef}
        className="font-anton text-5xl md:text-7xl lg:text-8xl text-white"
      >
        0{suffix}
      </h3>
      <p className="mt-3 text-xs md:text-sm uppercase tracking-[0.3em] text-white/40">
        {label}
      </p>
    </div>
  );
}

function PillarCard({ pillar, index }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative overflow-hidden border border-white/10 bg-white/[0.03] backdrop-blur-sm"
    >
      {/* Top color accent */}
      <motion.div
        className="absolute top-0 left-0 h-1 w-full"
        style={{ backgroundColor: pillar.color }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 + index * 0.15 }}
      />

      {/* Background number */}
      <div className="absolute -right-4 -top-6 font-anton text-[10rem] leading-none text-white/[0.03] select-none pointer-events-none">
        {pillar.number}
      </div>

      {/* Hover fill */}
      <motion.div
        className="absolute inset-0"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
        style={{
          backgroundColor: pillar.color,
          transformOrigin: "bottom",
          opacity: 0.1,
        }}
      />

      <div className="relative z-10 p-8 md:p-10">
        {/* Icon */}
        <motion.div
          className="text-4xl md:text-5xl mb-6"
          animate={{
            scale: isHovered ? 1.15 : 1,
            rotate: isHovered ? 5 : 0,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          {pillar.icon}
        </motion.div>

        {/* Number tag */}
        <div className="mb-4 flex items-center gap-3">
          <span
            className="text-xs font-bold tracking-[0.3em]"
            style={{ color: pillar.color }}
          >
            EVENT {pillar.number}
          </span>
          <div
            className="h-px flex-1"
            style={{ backgroundColor: pillar.color, opacity: 0.3 }}
          />
        </div>

        {/* Title */}
        <h3 className="font-anton text-2xl md:text-3xl lg:text-4xl text-white uppercase leading-tight whitespace-pre-line mb-4">
          {pillar.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base text-white/50 leading-relaxed group-hover:text-white/70 transition-colors duration-500">
          {pillar.description}
        </p>

        {/* Bottom arrow */}
        <motion.div
          className="mt-8 flex items-center gap-2"
          initial={{ x: 0 }}
          animate={{ x: isHovered ? 8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="h-px w-8 transition-all duration-500"
            style={{
              backgroundColor: pillar.color,
              width: isHovered ? 40 : 32,
            }}
          />
          <span
            className="text-xs tracking-[0.2em] transition-colors duration-500"
            style={{ color: isHovered ? pillar.color : "rgba(255,255,255,0.3)" }}
          >
            EXPLORE
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const horizontalRef = useRef(null);
  const revealTextRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Horizontal scroll text reveal ──
      gsap.fromTo(
        ".about-reveal-text",
        { xPercent: 100, opacity: 0 },
        {
          xPercent: -30,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalRef.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 1.5,
          },
        }
      );

      // ── Parallax laurel ──
      gsap.to(".about-laurel", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // ── Intro text line-by-line ──
      gsap.from(".about-intro-line", {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-intro",
          start: "top 80%",
        },
      });

      // ── Divider line grow ──
      gsap.from(".about-divider", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".about-divider",
          start: "top 85%",
        },
      });

      // ── Olympic rings decoration ──
      gsap.from(".about-ring", {
        scale: 0,
        opacity: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: ".about-rings-row",
          start: "top 85%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#07111F]"
    >
      {/* ── Background elements ── */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-20 h-[500px] w-[500px] rounded-full bg-[#D4AF37]/5 blur-[160px]" />
        <div className="absolute -bottom-40 -right-20 h-[500px] w-[500px] rounded-full bg-[#0085C7]/5 blur-[160px]" />
      </div>

      {/* Pinstripes texture */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_78px,rgba(255,255,255,0.02)_79px,transparent_80px)] pointer-events-none" />

      {/* Laurel watermark */}
      <img
        src="/laurel-gold.png"
        alt=""
        className="about-laurel pointer-events-none absolute left-1/2 top-1/2 w-[500px] md:w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-[0.02]"
      />

      {/* ── Horizontal scroll text ── */}
      <div
        ref={horizontalRef}
        className="relative overflow-hidden border-b border-white/5 py-16 md:py-24"
      >
        <div className="about-reveal-text whitespace-nowrap">
          <span className="font-anton text-[5rem] md:text-[10rem] lg:text-[14rem] text-white/[0.06] uppercase leading-none">
            ABOUT CODERUSH 3.0 — ABOUT CODERUSH 3.0 —
          </span>
        </div>
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-32">
        {/* Header */}
        <div className="mb-20 md:mb-28">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-4 text-xs sm:text-sm uppercase tracking-[0.35em] md:tracking-[0.5em] text-[#D4AF37]"
          >
            About The Competition
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-8xl font-black uppercase text-white"
          >
            The Arena
          </motion.h2>

          {/* Olympic rings row */}
          <div className="about-rings-row mt-8 flex gap-3">
            {olympicColors.map((color, i) => (
              <div
                key={i}
                className="about-ring h-4 w-4 md:h-5 md:w-5 rounded-full border-2"
                style={{ borderColor: color }}
              />
            ))}
          </div>
        </div>

        {/* ── Intro paragraph ── */}
        <div className="about-intro mb-20 md:mb-28 grid md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <p className="about-intro-line text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed font-light">
              <span className="text-[#D4AF37] font-semibold">CodeRush 3.0</span> is
              the flagship competitive programming championship organized by{" "}
              <span className="text-white font-medium">CPBYTE</span> — where the
              brightest coders converge to compete in an Olympics-inspired arena.
            </p>
          </div>

          <div>
            <p className="about-intro-line text-base md:text-lg text-white/50 leading-relaxed">
              Across two intense days, participants face algorithmic battles
              through Relay Races, 3v3 Eliminations, and the ultimate Javelin
              challenge. This isn't just a contest — it's a celebration of
              speed, strategy, and technical excellence.
            </p>

            <p className="about-intro-line mt-6 text-base md:text-lg text-white/50 leading-relaxed">
              Like the Olympic Games, CodeRush honors discipline, fair play, and
              the relentless pursuit of greatness. Every participant carries the
              torch of competitive programming forward.
            </p>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="about-divider h-px w-full bg-gradient-to-r from-[#D4AF37]/50 via-white/10 to-transparent mb-20 md:mb-28" />

        {/* ── Pillar cards ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 md:mb-32">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.number} pillar={pillar} index={index} />
          ))}
        </div>

        {/* ── Animated stat counters ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-white/10 bg-white/[0.02] backdrop-blur-sm"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.06)_0%,transparent_60%)]" />

          <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-8 p-10 md:p-16">
            <AnimatedCounter value="500" suffix="+" label="Participants" />
            <AnimatedCounter value="24" suffix="h" label="Of Coding" />
            <AnimatedCounter value="50" suffix="K+" label="Prize Pool ₹" />
            <AnimatedCounter value="3" suffix="+" label="Event Tracks" />
          </div>
        </motion.div>

        {/* ── Bottom tagline ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 md:mt-28 text-center"
        >
          <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-white/30">
            Faster. Smarter. Stronger.
          </p>

          <div className="mt-6 flex justify-center gap-2">
            {olympicColors.slice(0, 4).map((color, i) => (
              <motion.div
                key={i}
                className="h-1 w-8 md:w-12 rounded-full"
                style={{ backgroundColor: color }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * i }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
