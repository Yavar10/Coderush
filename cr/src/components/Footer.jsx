import {
  FaInstagram,
  FaLinkedinIn,
  FaDiscord,
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

      <div className="max-w-7xl mx-auto px-6 py-32">
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

          <div>
            <h3 className="text-6xl md:text-8xl font-black">₹50K+</h3>
            <p className="mt-4 text-white/50 uppercase tracking-widest">
              Prize Pool
            </p>
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
