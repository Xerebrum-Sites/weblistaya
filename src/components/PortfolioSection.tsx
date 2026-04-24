import { motion } from "framer-motion";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const projects = [
  { img: portfolio1, name: "Estudio Yoga Luz", category: "Bienestar" },
  { img: portfolio2, name: "Panadería La Espiga", category: "Gastronomía" },
  { img: portfolio3, name: "Martín Gómez Coach", category: "Fitness" },
];

export function PortfolioSection() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-semibold"
        >
          Trabajos recientes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-16 leading-tight max-w-2xl"
        >
          Webs reales, entregadas y en línea.
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="overflow-hidden rounded-2xl bg-card aspect-[4/3]">
                <img
                  src={p.img}
                  alt={`Web de ${p.name}`}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <p className="text-base font-semibold">{p.name}</p>
                <p className="text-sm text-muted-foreground">{p.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}