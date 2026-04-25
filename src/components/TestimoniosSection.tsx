import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonios = [
  {
    text: "En menos de una semana tenía mi web online. Quedó hermosa y empecé a recibir consultas el mismo día.",
    name: "Lucía Martínez",
    role: "Nutricionista",
    initial: "L",
  },
  {
    text: "Súper claros y rápidos. Me sacaron el dolor de cabeza de tener que armarla yo. Recomendado 100%.",
    name: "Martín Pereyra",
    role: "Arquitecto",
    initial: "M",
  },
  {
    text: "Entendieron lo que necesitaba sin que tenga que explicar mil veces. La web refleja perfecto mi marca.",
    name: "Sofía Romero",
    role: "Coach",
    initial: "S",
  },
];

export function TestimoniosSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6EEB00] font-bold mb-4">
            Lo que dicen
          </p>
          <h2 className="font-display font-bold text-[#0B0F14] text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
            Clientes felices, webs que venden.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonios.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl p-7 bg-[#F5F7FA] border border-black/5 hover:border-[#6EEB00]/40 hover:-translate-y-1 transition-all"
            >
              <Quote className="absolute top-5 right-5 w-7 h-7 text-[#A3FF12]/50" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-[#6EEB00] text-[#6EEB00]" />
                ))}
              </div>
              <p className="text-[#1F2937] leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                <span
                  className="flex items-center justify-center w-10 h-10 rounded-full text-[#0B0F14] font-bold"
                  style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
                >
                  {t.initial}
                </span>
                <div>
                  <p className="font-display font-semibold text-sm text-[#0B0F14]">{t.name}</p>
                  <p className="text-xs text-[#1F2937]/60">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
