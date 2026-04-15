import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-sm tracking-widest uppercase text-muted-foreground mb-8"
      >
        Tu web ya
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight max-w-3xl tracking-tight"
      >
        Tené tu web simple
        <br />
        y lista ya
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-xl font-light leading-relaxed"
      >
        Diseño páginas claras y estéticas para que puedas mostrar y vender tu servicio sin vueltas.
      </motion.p>
      <motion.a
        href="#contacto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.6 }}
        className="mt-12 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground tracking-wide transition-all hover:opacity-80"
      >
        Quiero mi web
      </motion.a>
    </section>
  );
}
