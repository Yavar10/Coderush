import {
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-black text-white border-t border-white/10">
      {/* MARQUEES */}

      <div className="overflow-hidden border-b border-white/10">
        <div className="py-6 whitespace-nowrap">
          <div className="animate-marquee flex w-max items-center gap-10 text-[7rem] md:text-[10rem] font-black uppercase leading-none">
            <span>Code</span>
            <span className="text-[#0085C7]">●</span>

            <span>Solve</span>
            <span className="text-[#F4C300]">●</span>

            <span>Compete</span>
            <span className="text-[#009F3D]">●</span>

            <span>Win</span>
            <span className="text-[#DF0024]">●</span>

            <span>Code</span>
            <span className="text-[#0085C7]">●</span>

            <span>Solve</span>
            <span className="text-[#F4C300]">●</span>

            <span>Compete</span>
            <span className="text-[#009F3D]">●</span>

            <span>Win</span>
            <span className="text-[#DF0024]">●</span>
          </div>
        </div>

        <div className="py-6 whitespace-nowrap border-t border-white/10">
          <div className="animate-marquee-reverse flex w-max items-center gap-10 text-[7rem] md:text-[10rem] font-black uppercase leading-none opacity-25">
            <span>CPBYTE</span>
            <span>CODERUSH</span>
            <span>3.0</span>

            <span>CPBYTE</span>
             <span>CODERUSH</span>
            <span>2026</span>

            <span>CPBYTE</span>
        <span>CODERUSH</span>
            <span>3.0</span>
          </div>
        </div>
      </div>

      {/* STATS */}

      <div  className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid md:grid-cols-3 gap-20 text-center">
          <div>
            <h3 className="text-6xl md:text-8xl font-black">500+</h3>
            <p className="mt-4 text-white/50 uppercase tracking-widest">
              Participants
            </p>
          </div>

          <div>
            <h3 className="text-6xl md:text-8xl font-black">3+</h3>
            <p className="mt-4 text-white/50 uppercase tracking-widest">
              Events
            </p>
          </div>

          <div >
            <h3 className="text-6xl md:text-8xl font-black">₹50K+</h3>
            <p  className="mt-4 text-white/50 uppercase tracking-widest">
              Prize Pool
            </p>
          </div>
        </div>
        <div id="venue"></div>
      </div>

      {/* VENUE / MAP */}

      <div   className="border-t border-white/10 relative">
        {/* Olympic accent bar */}
        <div className="flex h-1">
          <div className="flex-1 bg-[#0085C7]" />
          <div className="flex-1 bg-[#F4C300]" />
          <div className="flex-1 bg-[#009F3D]" />
          <div className="flex-1 bg-[#DF0024]" />
          <div className="flex-1 bg-white" />
        </div>

        <div className="grid lg:grid-cols-[1fr_2fr]">
          {/* Venue info panel */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center relative">
            {/* Background watermark */}
            <div className="absolute top-4 right-4 text-[8rem] font-black leading-none text-white/[0.02] select-none pointer-events-none">
              📍
            </div>

            <p className="text-xs uppercase tracking-[0.35em] text-[#F4C300] mb-4">
              The Arena
            </p>

            <h3 className="text-4xl lg:text-5xl font-black mb-6 leading-tight">
              Venue.
            </h3>

            <div className="flex items-start gap-3 mb-6">
              <FaMapMarkerAlt className="text-[#DF0024] mt-1 flex-shrink-0 text-lg" />
              <div>
                <p className="text-white/80 text-lg font-medium">
                  KIET Group of Institutions
                </p>
                <p className="text-white/40 text-sm mt-1 leading-relaxed">
                  Delhi-NCR, Ghaziabad,<br />
                  Uttar Pradesh, India
                </p>
              </div>
            </div>

            {/* Coordinates tag */}
            <div className="flex items-center gap-2 mb-8">
              <div className="h-px flex-1 max-w-[40px] bg-white/10" />
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/20">
                28.7532° N, 77.4971° E
              </span>
            </div>

            <a
              href="https://maps.google.com/?q=KIET+Group+of+Institutions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all w-fit"
            >
              Get Directions →
            </a>
          </div>

          {/* Map embed — framed */}
          <div className="relative group overflow-hidden min-h-[300px] lg:min-h-[420px] p-3 lg:p-4">
            {/* Outer glow frame */}
            <div className="absolute inset-3 lg:inset-4 border border-white/10 group-hover:border-white/20 transition-colors duration-700 pointer-events-none z-20" />

            {/* Olympic colored corner brackets */}
            {/* Top-left */}
            <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-6 h-6 pointer-events-none z-20">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0085C7]" />
              <div className="absolute top-0 left-0 h-full w-[2px] bg-[#0085C7]" />
            </div>
            {/* Top-right */}
            <div className="absolute top-3 right-3 lg:top-4 lg:right-4 w-6 h-6 pointer-events-none z-20">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-[#F4C300]" />
              <div className="absolute top-0 right-0 h-full w-[2px] bg-[#F4C300]" />
            </div>
            {/* Bottom-left */}
            <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 w-6 h-6 pointer-events-none z-20">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#009F3D]" />
              <div className="absolute bottom-0 left-0 h-full w-[2px] bg-[#009F3D]" />
            </div>
            {/* Bottom-right */}
            <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 w-6 h-6 pointer-events-none z-20">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-[#DF0024]" />
              <div className="absolute bottom-0 right-0 h-full w-[2px] bg-[#DF0024]" />
            </div>

            {/* Map iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.873898994474!2d77.4970664!3d28.7531817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf574d18f2b6f%3A0x4a65c0bc0122eb2f!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1781367310153!5m2!1sen!2sin"
              className="relative w-full h-full min-h-[280px] lg:min-h-[390px] grayscale brightness-[0.4] group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700 ease-out"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Overlay gradients */}
            <div className="absolute inset-3 lg:inset-4 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none z-10 group-hover:opacity-60 transition-opacity duration-700" />
            <div className="absolute inset-3 lg:inset-4 bg-gradient-to-r from-black/50 via-transparent to-transparent pointer-events-none z-10 lg:block hidden" />

            {/* Scanline texture overlay */}
            <div
              className="absolute inset-3 lg:inset-4 pointer-events-none z-10 opacity-[0.03] group-hover:opacity-0 transition-opacity duration-700"
              style={{
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
              }}
            />

            {/* Top-left coordinate label */}
            <div className="absolute top-6 left-6 lg:top-7 lg:left-7 z-20 pointer-events-none">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#DF0024] animate-pulse" />
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/40">
                  LIVE LOCATION
                </span>
              </div>
            </div>

            {/* Bottom-right info badge */}
            <div className="absolute bottom-6 right-6 lg:bottom-7 lg:right-7 z-20 pointer-events-none">
              <div className="px-4 py-2 bg-black/80 backdrop-blur-md border border-white/10 flex items-center gap-3">
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0085C7]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#F4C300]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#009F3D]" />
                  <div className="w-1.5 h-1.5 rounded-full bg-[#DF0024]" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.15em] text-white/50">
                  KIET · GZB · IN
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA GRID */}

      <div className="border-t border-white/10">
        <div className="grid lg:grid-cols-3">
          {/* Register */}

          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
            <h3 className="text-4xl font-black mb-4">
              Register.
            </h3>

            <p className="text-white/50 text-xl mb-10 max-w-xs">
              Enter the arena and compete with the best developers.
            </p>

            <a href="https://devfolio.co" target="_blank" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
              Register Now →
            </a>
          </div>

          {/* Timeline */}

          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10">
            <h3 className="text-4xl font-black mb-4">
              Timeline.
            </h3>

            <p className="text-white/50 text-xl mb-10 max-w-xs">
              Stay ahead with event milestones and submission dates.
            </p>

            <a href="#timeline" className="px-8 py-4 rounded-full border border-white/20 hover:bg-white hover:text-black transition-all">
              View Schedule →
            </a>
          </div>

          {/* Social */}

          <div className="p-8 lg:p-12">
            <h3 className="text-4xl font-black mb-4">
              Social.
            </h3>

            <p className="text-white/50 text-xl mb-10 max-w-xs">
              Follow announcements and community updates.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FaDiscord />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-[#0085C7]" />
            <div className="w-3 h-3 rounded-full bg-[#F4C300]" />
            <div className="w-3 h-3 rounded-full bg-white" />
            <div className="w-3 h-3 rounded-full bg-[#009F3D]" />
            <div className="w-3 h-3 rounded-full bg-[#DF0024]" />
          </div>

          <p className="text-sm text-white/40">
            © 2026 CPBYTE CODERUSH 3.0
          </p>

          <div className="flex gap-6 text-sm text-white/40">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Code of Conduct</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
