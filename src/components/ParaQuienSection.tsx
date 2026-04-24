import { motion } from "framer-motion";
import { Rocket, User, Briefcase, Sparkles, type LucideIcon } from "lucide-react";
import paraQuienBg from "@/assets/para-quien-bg.jpg";

const audiences: { label: string; icon: LucideIcon }[] = [
  { label: "Emprendedores", icon: Rocket },
  { label: "Profesionales independientes", icon: User },
  { label: "Servicios", icon: Briefcase },
  { label: "Marcas personales", icon: Sparkles },
];

export function ParaQuienSection() {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center grayscale opacity-30"
        style={{ backgroundImage: `url(${paraQuienBg})` }}
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"
      />
      <div className="relative max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-12 text-[#c8fb6a] font-semibold"
        >
          Para quién es
        </motion.p>
        <div className="space-y-5 text-white flex flex-col items-center">
          {audiences.map(({ label, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center justify-center gap-4"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-[#c8fb6a] shrink-0 ring-1 ring-[#c8fb6a]/40">
                <Icon className="w-5 h-5" strokeWidth={2} />
              </span>
              <span className="text-xl sm:text-2xl font-medium">{label}</span>
            </motion.div>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-lg text-muted-foreground font-light leading-relaxed text-white"
        >
          Si necesitás mostrar lo que hacés y no tenés una web clara, te lo resolvemos.
        </motion.p>
      </div>
    </section>
  );
}
