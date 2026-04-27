import { useEffect, useRef, useState } from "react";
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

const trackProjects = [...projects, ...projects.slice(0, 3)];

export function PortfolioSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [withTransition, setWithTransition] = useState(true);

  const gap = containerWidth >= 640 ? 24 : 20;
  const cardWidth = containerWidth >= 768 ? (containerWidth - gap * 2) / 3 : containerWidth;
  const offsetX = activeIndex * (cardWidth + gap);

  useEffect(() => {
    if (!carouselRef.current) return;

    const resizeObserver = new ResizeObserver(([entry]) => {
      setContainerWidth(entry.contentRect.width);
    });

    resizeObserver.observe(carouselRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => current + 1);
    }, 2800);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeIndex !== projects.length) return;

    const resetTimer = window.setTimeout(() => {
      setWithTransition(false);
      setActiveIndex(0);
      window.requestAnimationFrame(() => setWithTransition(true));
    }, 620);

    return () => window.clearTimeout(resetTimer);
  }, [activeIndex]);

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#F5F7FA] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
      </div>

      <div ref={carouselRef} className="max-w-6xl mx-auto px-4 sm:px-6 overflow-hidden">
        <motion.div
          animate={{ x: -offsetX }}
          transition={withTransition ? { duration: 0.62, ease: [0.22, 1, 0.36, 1] } : { duration: 0 }}
          className="flex gap-5 sm:gap-6 pb-3 will-change-transform"
        >
          {trackProjects.map((p, index) => (
            <div
              key={`${p.name}-${index}`}
              className="group shrink-0 min-w-0"
              style={{ width: cardWidth || undefined }}
            >
              <div className="relative overflow-hidden rounded-2xl bg-white border border-black/5 aspect-[4/3] shadow-sm group-hover:shadow-xl transition-shadow">
                <img
                  src={p.img}
                  alt={`Web de ${p.name}`}
                  loading="eager"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover scale-[1.08] transition-transform duration-500 group-hover:scale-[1.12]"
                />
              </div>
              <div className="mt-4">
                <p className="font-display font-semibold text-[#0B0F14]">{p.name}</p>
                <p className="text-sm text-[#1F2937]/60">{p.category}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
