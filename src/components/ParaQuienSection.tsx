import { motion } from "framer-motion";

const audiences = [
  "Emprendedores",
  "Profesionales independientes",
  "Servicios",
  "Marcas personales",
];

export function ParaQuienSection() {
  return (
    <section className="py-32 px-6 bg-black">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-12 text-[#c8fb6a] font-semibold"
        >
          Para quién es
        </motion.p>
        <div className="space-y-4 text-white">
          {audiences.map((item, i) => (
            <motion.p
              key={item}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-xl sm:text-2xl font-medium"
            >
              {item}
            </motion.p>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-lg text-muted-foreground font-light leading-relaxed text-white"
        >
          Si necesitás mostrar lo que hacés y no tenés una web clara, te lo resolvemos.
        </motion.p>
      </div>
    </section>
  );
}
