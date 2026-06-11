const events = [
  {
    time: "10:00 AM",
    title: "Registration",
    day: "21 AUG",
  },
  {
    time: "12:00 PM",
    title: "Inaugural Ceremony",
    day: "21 AUG",
  },
  {
    time: "1:00 PM",
    title: "Lunch",
    day: "21 AUG",
  },
  {
    time: "2:00 PM",
    title: "Relay Race",
    day: "21 AUG",
  },
  {
    time: "6:00 PM",
    title: "Elimination (3v3)",
    day: "21 AUG",
  },
  {
    time: "10:00 PM",
    title: "Elimination Finals",
    day: "21 AUG",
  },
  {
    time: "12:00 AM",
    title: "Jamming Session",
    day: "22 AUG",
  },
  {
    time: "7:00 AM",
    title: "Breakfast",
    day: "22 AUG",
  },
  {
    time: "9:00 AM",
    title: "Javelin",
    day: "22 AUG",
  },
  {
    time: "2:00 PM",
    title: "Speaker Session",
    day: "22 AUG",
  },
  {
    time: "4:00 PM",
    title: "Closing Ceremony",
    day: "22 AUG",
  },
];

export default function Timeline() {
  return (
    <section
      id="timeline"
      className="relative min-h-[2200px] overflow-hidden bg-[#07111F] py-32"
    >
      {/* Stadium Lights */}
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[#C5A572]/10 blur-[120px]" />
      <div className="absolute top-1/3 -right-40 h-[500px] w-[500px] rounded-full bg-[#C5A572]/10 blur-[120px]" />

      {/* Laurel */}
      <img
        src="/laurel-gold.png"
        alt=""
        className="absolute left-10 top-20 w-32 opacity-10"
      />

      <img
        src="/laurel-gold.png"
        alt=""
        className="absolute bottom-20 right-10 w-32 rotate-180 opacity-10"
      />

      {/* Section Heading */}
      <div className="relative z-20 mb-32 text-center">
        <p className="mb-3 tracking-[0.4em] text-[#C5A572] uppercase">
          Event Schedule
        </p>

        <h2 className="text-6xl font-black text-white md:text-8xl">
          TIMELINE
        </h2>
      </div>

      {/* Track */}
      <div className="absolute left-1/2 top-64 h-[1700px] w-[700px] -translate-x-1/2">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute border-2 border-[#C5A572]/20 rounded-[999px]"
            style={{
              inset: `${i * 22}px`,
            }}
          />
        ))}
      </div>

      {/* DAY 1 */}
      <div className="absolute left-1/2 top-[350px] z-20 -translate-x-1/2">
        <div className="rounded-full bg-[#C5A572] px-10 py-4 font-black tracking-[0.3em] text-[#07111F]">
          21 AUGUST 2026
        </div>
      </div>

      {/* DAY 2 */}
      <div className="absolute left-1/2 top-[1250px] z-20 -translate-x-1/2">
        <div className="rounded-full bg-[#C5A572] px-10 py-4 font-black tracking-[0.3em] text-[#07111F]">
          22 AUGUST 2026
        </div>
      </div>

      {/* Events */}
      {events.map((event, index) => {
        const leftSide = index % 2 === 0;

        return (
          <div
            key={index}
            className={`absolute z-20 flex items-center gap-6
            ${
              leftSide
                ? "left-[10%] md:left-[15%]"
                : "right-[10%] md:right-[15%]"
            }`}
            style={{
              top: `${470 + index * 145}px`,
            }}
          >
            {leftSide && (
              <div className="text-right">
                <div className="text-sm tracking-widest text-[#C5A572]">
                  {event.time}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {event.title}
                </h3>
              </div>
            )}

            {/* Checkpoint */}
            <div className="relative flex h-10 w-10 items-center justify-center">
              <div className="absolute h-10 w-10 rounded-full bg-[#C5A572]" />
              <div className="absolute h-10 w-10 animate-ping rounded-full bg-[#C5A572]/40" />
              <div className="z-10 h-4 w-4 rounded-full bg-[#07111F]" />
            </div>

            {!leftSide && (
              <div>
                <div className="text-sm tracking-widest text-[#C5A572]">
                  {event.time}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {event.title}
                </h3>
              </div>
            )}

            {/* Huge Number */}
            <span
              className="
              absolute
              -z-10
              text-[8rem]
              md:text-[12rem]
              font-black
              text-transparent
              opacity-10
              select-none
            "
              style={{
                WebkitTextStroke: "2px #C5A572",
                left: leftSide ? "-100px" : "auto",
                right: leftSide ? "auto" : "-100px",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        );
      })}

      {/* Finish */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 text-center">
        <div className="mb-4 text-[#C5A572] text-xl tracking-[0.3em]">
          FINISH LINE
        </div>

      

        <h3 className="mt-6 text-3xl font-black text-white">
          Closing Ceremony & Felicitation
        </h3>
      </div>
    </section>
  );
}