import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactoSection() {
  return (
    <section id="contacto" className="relative py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6EEB00] font-bold mb-4">
            Contacto
          </p>
          <h2 className="font-display font-bold text-[#0B0F14] text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
            Empecemos tu web.
          </h2>
          <p className="mt-4 text-[#1F2937]/70 text-lg">
            Contanos qué necesitás. Te respondemos en el día.
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#F5F7FA] border border-black/5 rounded-2xl p-6 sm:p-8 space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              required
              placeholder="Tu nombre"
              className="w-full bg-white rounded-xl border border-black/10 px-4 h-12 text-base text-[#0B0F14] placeholder:text-[#1F2937]/40 focus:outline-none focus:border-[#6EEB00] focus:ring-2 focus:ring-[#A3FF12]/30 transition-all"
            />
            <input
              type="email"
              required
              placeholder="Tu email"
              className="w-full bg-white rounded-xl border border-black/10 px-4 h-12 text-base text-[#0B0F14] placeholder:text-[#1F2937]/40 focus:outline-none focus:border-[#6EEB00] focus:ring-2 focus:ring-[#A3FF12]/30 transition-all"
            />
          </div>
          <textarea
            placeholder="Contanos qué necesitás"
            rows={4}
            className="w-full bg-white rounded-xl border border-black/10 px-4 py-3 text-base text-[#0B0F14] placeholder:text-[#1F2937]/40 focus:outline-none focus:border-[#6EEB00] focus:ring-2 focus:ring-[#A3FF12]/30 transition-all resize-none"
          />
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full px-8 h-13 py-4 text-base font-semibold text-[#0B0F14] shadow-[0_12px_30px_-8px_rgba(110,235,0,0.55)] hover:-translate-y-0.5 transition-all"
              style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
            >
              Quiero mi presupuesto gratis <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
