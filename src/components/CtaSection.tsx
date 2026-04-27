import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ctaImg from "@/assets/cta-emprendedor.jpg";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl bg-[#0B0F14] grid lg:grid-cols-2 items-stretch"
        >
          <div className="p-6 sm:p-10 lg:p-14 flex flex-col justify-center order-2 lg:order-1">
            <p className="text-xs tracking-[0.2em] uppercase text-[#A3FF12] font-bold mb-4">
              Empezá hoy
            </p>
            <h2 className="font-display font-bold text-white text-2xl sm:text-3xl md:text-4xl lg:text-[44px] leading-[1.1] break-words">
              Tu web puede estar lista esta semana.
            </h2>
            <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed max-w-md">
              Simple, clara y sin vueltas. Nos encargamos de todo.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href="https://wa.me/5491100000000?text=Hola!%20Quiero%20info%20sobre%20mi%20web."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 h-12 text-sm sm:text-base font-semibold text-[#0B0F14] hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
              >
                Escribinos por WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div className="relative min-h-[220px] sm:min-h-[300px] lg:min-h-[460px] order-1 lg:order-2">
            <img
              src={ctaImg}
              alt=""
              aria-hidden="true"
              loading="lazy"
              width={1600}
              height={1100}
              className="absolute inset-0 w-full h-full object-cover blur-xl scale-110 opacity-50"
            />
            <img
              src={ctaImg}
              alt="Entrenador argentino feliz en su gimnasio"
              loading="lazy"
              width={1600}
              height={1100}
              className="absolute inset-0 w-full h-full object-contain object-center"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#0B0F14] via-[#0B0F14]/40 lg:via-transparent to-transparent"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
