import { motion } from "framer-motion";

const steps = [
  { number: "01", text: "Nos contás tu idea" },
  { number: "02", text: "Ordenamos el contenido" },
  { number: "03", text: "Diseñamos tu web" },
  { number: "04", text: "Te la entregamos lista" },
];

export function ComoFuncionaSection() {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase mb-12 font-semibold text-[#c8fb6a]"
        >
          Cómo funciona
        </motion.p>
        <div className="space-y-6 w-full max-w-sm">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center justify-center gap-4"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-[#c8fb6a] text-black text-sm tabular-nums font-semibold shrink-0">
                {step.number}
              </span>
              <span className="text-lg font-medium">{step.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}