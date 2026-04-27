import { motion } from "framer-motion";
import pizzeria from "@/assets/portfolio-pizzeria.jpg";
import panaderia from "@/assets/portfolio-panaderia.jpg";
import peluqueria from "@/assets/portfolio-peluqueria.jpg";
import cafe from "@/assets/portfolio-cafe.jpg";
import abogado from "@/assets/portfolio-abogado.jpg";
import electricista from "@/assets/portfolio-electricista.jpg";

const projects = [
  { img: pizzeria, name: "Pizzería Don Carlo", category: "Pizzería artesanal" },
  { img: panaderia, name: "Panadería La Espiga", category: "Panadería de barrio" },
  { img: peluqueria, name: "Studio Bianca", category: "Peluquería" },
  { img: cafe, name: "Café Tostado", category: "Café de especialidad" },
  { img: abogado, name: "Estudio Pereyra", category: "Abogado" },
  { img: electricista, name: "Electricista Rojas", category: "Electricista matriculado" },
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

        <div className="-mx-4 sm:-mx-6 px-4 sm:px-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
          <div className="flex gap-5 sm:gap-6 pb-4">
            {projects.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group shrink-0 snap-start w-[78vw] sm:w-[360px] md:w-[400px]"
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
                </div>
                <div className="mt-4">
                  <p className="font-display font-semibold text-[#0B0F14]">{p.name}</p>
                  <p className="text-sm text-[#1F2937]/60">{p.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <p className="mt-4 text-center text-xs text-[#1F2937]/50 sm:hidden">Deslizá para ver más →</p>
      </div>
    </section>
  );
}
