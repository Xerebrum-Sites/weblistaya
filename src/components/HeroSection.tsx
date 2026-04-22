import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[oklch(0.12_0.01_260)] text-white overflow-hidden">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute top-8 left-8"
      >
        <img
          src="/logo.png"
          alt="tu web YA"
          className="h-10 w-auto object-contain"
        />
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
