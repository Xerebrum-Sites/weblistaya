import { motion } from "framer-motion";

export function CtaSection() {
  return (
    <section className="py-32 px-6 text-center">
      <div className="max-w-xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-4xl font-light leading-relaxed"
        >
          Tu web puede estar lista en pocos días. Simple, clara y sin vueltas.
        </motion.p>
        <motion.a
          href="#contacto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-12 inline-flex items-center justify-center rounded-full bg-primary px-10 py-4.5 text-base font-medium text-primary-foreground tracking-wide transition-all hover:opacity-80 hover:scale-[1.02] active:scale-[0.98]"
        >
          Escribinos ahora
        </motion.a>
      </div>
    </section>
  );
}
