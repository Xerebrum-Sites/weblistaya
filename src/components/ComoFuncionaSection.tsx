import { motion } from "framer-motion";

const steps = [
  { number: "01", text: "Me contás tu idea" },
  { number: "02", text: "Ordeno el contenido" },
  { number: "03", text: "Diseño tu web" },
  { number: "04", text: "Te la entrego lista" },
];

export function ComoFuncionaSection() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-16"
        >
          Cómo funciona
        </motion.p>
        <div className="space-y-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-baseline gap-6"
            >
              <span className="text-sm text-muted-foreground font-light tabular-nums">{step.number}</span>
              <span className="text-2xl sm:text-3xl font-light">{step.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
