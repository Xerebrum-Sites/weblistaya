import { motion } from "framer-motion";

function WireframeGraphic() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      {/* Right-side wireframe */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1 }}
        className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[280px] md:w-[340px] lg:w-[400px] opacity-[0.06]"
      >
        <svg viewBox="0 0 320 440" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Browser chrome */}
          <rect x="0" y="0" width="320" height="440" rx="12" stroke="white" strokeWidth="1" />
          <rect x="0" y="0" width="320" height="32" rx="12" fill="white" fillOpacity="0.3" />
          <circle cx="18" cy="16" r="4" fill="white" fillOpacity="0.5" />
          <circle cx="32" cy="16" r="4" fill="white" fillOpacity="0.5" />
          <circle cx="46" cy="16" r="4" fill="white" fillOpacity="0.5" />

          {/* Nav bar */}
          <rect x="20" y="48" width="60" height="8" rx="4" fill="white" fillOpacity="0.4" />
          <rect x="200" y="48" width="30" height="8" rx="4" fill="white" fillOpacity="0.25" />
          <rect x="240" y="48" width="30" height="8" rx="4" fill="white" fillOpacity="0.25" />
          <rect x="280" y="48" width="24" height="8" rx="4" fill="white" fillOpacity="0.25" />

          {/* Hero text block */}
          <rect x="20" y="90" width="200" height="12" rx="4" fill="white" fillOpacity="0.35" />
          <rect x="20" y="112" width="160" height="12" rx="4" fill="white" fillOpacity="0.35" />
          <rect x="20" y="140" width="120" height="6" rx="3" fill="white" fillOpacity="0.15" />
          <rect x="20" y="154" width="140" height="6" rx="3" fill="white" fillOpacity="0.15" />

          {/* CTA button */}
          <rect x="20" y="180" width="90" height="28" rx="14" fill="white" fillOpacity="0.2" />

          {/* Divider */}
          <line x1="20" y1="230" x2="300" y2="230" stroke="white" strokeOpacity="0.1" strokeWidth="1" />

          {/* Cards row */}
          <rect x="20" y="250" width="85" height="100" rx="8" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          <rect x="30" y="265" width="50" height="6" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="30" y="280" width="65" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="30" y="290" width="55" height="4" rx="2" fill="white" fillOpacity="0.1" />

          <rect x="117" y="250" width="85" height="100" rx="8" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          <rect x="127" y="265" width="50" height="6" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="127" y="280" width="65" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="127" y="290" width="55" height="4" rx="2" fill="white" fillOpacity="0.1" />

          <rect x="214" y="250" width="85" height="100" rx="8" stroke="white" strokeOpacity="0.2" strokeWidth="1" />
          <rect x="224" y="265" width="50" height="6" rx="3" fill="white" fillOpacity="0.2" />
          <rect x="224" y="280" width="65" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="224" y="290" width="55" height="4" rx="2" fill="white" fillOpacity="0.1" />

          {/* Footer area */}
          <rect x="20" y="380" width="80" height="6" rx="3" fill="white" fillOpacity="0.1" />
          <rect x="20" y="394" width="60" height="4" rx="2" fill="white" fillOpacity="0.08" />
          <rect x="220" y="380" width="80" height="6" rx="3" fill="white" fillOpacity="0.1" />
          <rect x="240" y="394" width="60" height="4" rx="2" fill="white" fillOpacity="0.08" />
        </svg>
      </motion.div>

      {/* Left-side smaller wireframe (mobile) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 1.3 }}
        className="absolute left-[8%] top-[60%] -translate-y-1/2 w-[120px] md:w-[150px] lg:w-[180px] opacity-[0.04] hidden md:block"
      >
        <svg viewBox="0 0 160 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Phone frame */}
          <rect x="0" y="0" width="160" height="280" rx="16" stroke="white" strokeWidth="1" />
          <rect x="50" y="8" width="60" height="4" rx="2" fill="white" fillOpacity="0.3" />

          {/* Content */}
          <rect x="16" y="30" width="80" height="8" rx="4" fill="white" fillOpacity="0.3" />
          <rect x="16" y="46" width="60" height="8" rx="4" fill="white" fillOpacity="0.3" />
          <rect x="16" y="68" width="100" height="4" rx="2" fill="white" fillOpacity="0.15" />
          <rect x="16" y="80" width="90" height="4" rx="2" fill="white" fillOpacity="0.15" />

          {/* Button */}
          <rect x="16" y="100" width="70" height="20" rx="10" fill="white" fillOpacity="0.15" />

          {/* Image placeholder */}
          <rect x="16" y="136" width="128" height="70" rx="6" stroke="white" strokeOpacity="0.15" strokeWidth="1" />

          {/* Text lines */}
          <rect x="16" y="222" width="100" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="16" y="234" width="80" height="4" rx="2" fill="white" fillOpacity="0.1" />
          <rect x="16" y="246" width="90" height="4" rx="2" fill="white" fillOpacity="0.1" />
        </svg>
      </motion.div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[oklch(0.12_0.01_260)] text-white overflow-hidden">
      {/* Wireframe background graphic */}
      <WireframeGraphic />

      {/* Logo placeholder */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8"
      >
        <span className="text-base font-medium tracking-wide text-[#c8fb6a]">
          tu web YA
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl tracking-tight font-sans font-semibold sm:text-7xl"
      >
        Tené tu web
        <br />
        simple y lista, ya.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-10 text-lg sm:text-xl text-white/60 max-w-lg leading-relaxed font-medium"
      >
        Te diseñamos una página clara y estética para que puedas mostrar y vender tu servicio sin vueltas.
      </motion.p>

      <motion.a
        href="#contacto"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-14 inline-flex items-center justify-center rounded-full text-black px-10 py-4.5 text-base font-medium tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] bg-[#c8fb6a]"
      >
        Quiero mi web
      </motion.a>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"
        />
      </motion.div>
    </section>
  );
}
