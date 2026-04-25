import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ctaImg from "@/assets/cta-emprendedor.jpg";

export function CtaSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-[#0B0F14] grid lg:grid-cols-2 items-stretch"
        >
          <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A3FF12] font-bold mb-4">
              Empezá hoy
            </p>
            <h2 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl leading-[1.1]">
              Tu web puede estar lista esta semana.
            </h2>
            <p className="mt-5 text-white/70 text-lg leading-relaxed max-w-md">
              Simple, clara y sin vueltas. Nos encargamos de todo.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-full px-7 h-13 py-4 text-base font-semibold text-[#0B0F14] hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
              >
                Crear mi web ahora <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5491100000000?text=Hola!%20Quiero%20info%20sobre%20mi%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full px-7 py-4 text-base font-semibold text-white border border-white/20 hover:bg-white/10 transition-all"
              >
                Hablar por WhatsApp
              </a>
            </div>
          </div>
          <div className="relative min-h-[280px] lg:min-h-[460px]">
            <img
              src={ctaImg}
              alt="Emprendedora feliz con su nueva web"
              loading="lazy"
              width={1600}
              height={1100}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 lg:bg-gradient-to-r from-[#0B0F14] via-transparent to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
