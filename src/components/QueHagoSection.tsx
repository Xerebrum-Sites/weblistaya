import { motion } from "framer-motion";
import workspace from "@/assets/workspace.jpg";

export function QueHagoSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-6"
        >
          Qué hacemos
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-2xl sm:text-3xl leading-relaxed font-semibold"
        >
          Diseñamos páginas web simples, pensadas para mostrar tu servicio de forma clara, ordenada y profesional.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground font-light leading-relaxed"
        >
          Te ayudamos a tener presencia online sin complicarte.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 overflow-hidden rounded-3xl"
        >
          <img
            src={workspace}
            alt="Espacio de trabajo con laptop y notas"
            loading="lazy"
            width={1280}
            height={896}
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
