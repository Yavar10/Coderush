import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const olympicColors = ["#0085C7", "#F4C300", "#009F3D", "#DF0024"];

const rules = [
  {
    id: "01",
    title: "Open to All College Students",
    description:
      "Any undergraduate or postgraduate student currently enrolled in a recognized college or university is eligible to participate.",
    icon: "🎓",
    color: "#0085C7",
  },
  {
    id: "02",
    title: "Individual or Team Entry",
    description:
      "Participate solo or form a team of up to 3 members. Team members can be from different colleges.",
    icon: "👥",
    color: "#F4C300",
  },
  {
    id: "03",
    title: "Valid College ID Required",
    description:
      "Each participant must present a valid college ID card or enrollment proof at the time of registration.",
    icon: "🪪",
    color: "#009F3D",
  },
  {
    id: "04",
    title: "Proficiency in Any Language",
    description:
      "Solve problems in C, C++, Java, Python, or any language supported by the judging platform. No language restrictions.",
    icon: "💻",
    color: "#DF0024",
  },
  {
    id: "05",
    title: "Fair Play Policy",
    description:
      "Plagiarism, external help, and code sharing between teams is strictly prohibited. Violations lead to instant disqualification.",
    icon: "⚖️",
    color: "#0085C7",
  },
  {
    id: "06",
    title: "Registration on Devfolio",
    description:
      "All participants must register through the official Devfolio page before the deadline. Walk-in entries are not accepted.",
    icon: "📋",
    color: "#F4C300",
  },
];

function RuleCard({ rule, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="group relative"
    >
      <div className="relative overflow-hidden border border-black/10 bg-white hover:shadow-xl transition-shadow duration-500">
        {/* Left color accent */}
        <motion.div
          className="absolute left-0 top-0 h-full w-1"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
          style={{
            backgroundColor: rule.color,
            transformOrigin: "top",
          }}
        />

        <div className="flex items-start gap-5 p-6 md:p-8">
          {/* Number badge */}
          <div
            className="shrink-0 flex items-center justify-center h-12 w-12 md:h-14 md:w-14 rounded-full border-2 font-anton text-lg md:text-xl"
            style={{
              borderColor: rule.color,
              color: rule.color,
            }}
          >
            {rule.id}
          </div>

          <div className="flex-1 min-w-0">
            {/* Icon + Title */}
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl md:text-2xl">{rule.icon}</span>
              <h3 className="font-anton text-lg md:text-xl lg:text-2xl uppercase text-zinc-900 leading-tight">
                {rule.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
              {rule.description}
            </p>
          </div>
        </div>

        {/* Hover underline effect */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-full"
          style={{ backgroundColor: rule.color }}
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
}

export default function Eligibility() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ── Stagger the track lanes ──
      gsap.from(".eligibility-track", {
        scaleX: 0,
        transformOrigin: "left center",
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".eligibility-tracks",
          start: "top 85%",
        },
      });

      // ── CTA button entrance ──
      gsap.from(".eligibility-cta", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".eligibility-cta",
          start: "top 90%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="eligibility"
      ref={sectionRef}
      className="relative overflow-hidden bg-zinc-50"
    >
      {/* ── Background ── */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Pinstripes */}
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_right,transparent_0px,transparent_58px,rgba(0,0,0,0.04)_59px,transparent_60px)]" />
        {/* Subtle color wash */}
        <div className="absolute -top-40 right-0 h-[400px] w-[400px] rounded-full bg-blue-200/20 blur-[120px]" />
        <div className="absolute -bottom-40 left-0 h-[400px] w-[400px] rounded-full bg-red-200/20 blur-[120px]" />
      </div>

      {/* ── Olympic track decoration ── */}
      <div className="eligibility-tracks relative border-b border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-6 flex gap-2">
          {olympicColors.map((color, i) => (
            <div
              key={i}
              className="eligibility-track h-2 flex-1 rounded-full"
              style={{ backgroundColor: color, opacity: 0.15 }}
            />
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-32">
        {/* Header */}
        <div className="mb-16 md:mb-24 grid md:grid-cols-2 gap-8 md:gap-16 items-end">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-4 text-xs sm:text-sm font-bold uppercase tracking-[0.35em] md:tracking-[0.5em] text-[#8C6A1A]"
            >
              Who Can Compete
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-8xl font-black uppercase text-zinc-900"
            >
              Eligibility
            </motion.h2>

            {/* Olympic dots */}
            <div className="mt-6 flex gap-2">
              {olympicColors.map((color, i) => (
                <motion.div
                  key={i}
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: color }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + i * 0.08,
                    type: "spring",
                    stiffness: 400,
                  }}
                />
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base md:text-lg text-zinc-500 leading-relaxed"
          >
            CodeRush 3.0 is open to passionate programmers from all
            backgrounds. Review the criteria below to make sure you qualify
            for the ultimate competitive programming championship.
          </motion.p>
        </div>

        {/* ── Rules Grid ── */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-20 md:mb-28">
          {rules.map((rule, index) => (
            <RuleCard key={rule.id} rule={rule} index={index} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <div className="eligibility-cta relative overflow-hidden rounded-[2rem] md:rounded-[3rem] border border-black/10 bg-white">
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(212,175,55,0.04)_0%,transparent_60%)]" />
            {/* Faint track lines */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-[repeating-linear-gradient(to_bottom,transparent_0px,transparent_18px,rgba(0,0,0,0.02)_19px,transparent_20px)]" />
          </div>

          <div className="relative z-10 p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-xl">
              <h3 className="font-anton text-3xl md:text-5xl lg:text-6xl uppercase text-zinc-900 mb-4">
                Ready to
                <br />
                <span className="text-[#D4AF37]">Compete?</span>
              </h3>
              <p className="text-zinc-500 text-base md:text-lg">
                If you meet the criteria, don't wait. Secure your spot in the
                arena before registrations close.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6">
              <a
                href="https://devfolio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden border-2 border-black px-10 py-4 md:px-14 md:py-5 text-sm md:text-base font-bold uppercase tracking-[0.2em]"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-500">
                  Register Now
                </span>
                <div className="absolute inset-0 -translate-x-full bg-black transition-transform duration-500 group-hover:translate-x-0" />
              </a>

              {/* Olympic ring mini */}
              <div className="flex -space-x-2">
                {olympicColors.map((color, i) => (
                  <div
                    key={i}
                    className="h-6 w-6 rounded-full border-2 bg-transparent"
                    style={{ borderColor: color }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom track lines ── */}
      <div className="relative border-t border-black/5">
        <div className="mx-auto max-w-7xl px-6 py-4 flex gap-2">
          {[...olympicColors].reverse().map((color, i) => (
            <motion.div
              key={i}
              className="h-1 flex-1 rounded-full"
              style={{ backgroundColor: color, opacity: 0.1 }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
