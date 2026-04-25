import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  { img: portfolio1, name: "Estudio Yoga Luz", category: "Bienestar", url: "estudioyogaluz.com.ar" },
  { img: portfolio2, name: "Panadería La Espiga", category: "Gastronomía", url: "laespiga.com.ar" },
  { img: portfolio3, name: "Martín Gómez Coach", category: "Fitness", url: "martingomezcoach.com" },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 px-4 sm:px-6 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6EEB00] font-bold mb-4">
            Trabajos recientes
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-[#0B0F14] text-3xl sm:text-4xl md:text-5xl leading-[1.1]"
          >
            Webs reales, ya online y vendiendo.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.name}
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group block"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white border border-black/5 aspect-[4/3] shadow-sm group-hover:shadow-xl transition-shadow">
                <img
                  src={p.img}
                  alt={`Web de ${p.name}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <span
                  className="absolute top-3 right-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/95 text-[#0B0F14] opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-3">
                <div>
                  <p className="font-display font-semibold text-[#0B0F14]">{p.name}</p>
                  <p className="text-sm text-[#1F2937]/60">{p.category}</p>
                </div>
                <span className="text-xs font-medium text-[#6EEB00] mt-1">{p.url}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
