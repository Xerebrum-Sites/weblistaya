import { motion } from "framer-motion";

export function QueHagoSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-6"
        >
          Qué hago
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-3xl font-light leading-relaxed"
        >
          Diseño páginas web simples pensadas para mostrar tu servicio de forma clara, ordenada y profesional.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground font-light leading-relaxed"
        >
          Ideal si necesitás tener presencia online sin complicarte.
        </motion.p>
      </div>
    </section>
  );
}
