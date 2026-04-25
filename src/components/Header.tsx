import { motion } from "framer-motion";
import logo from "@/assets/logo-positivo.png";

export function Header() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-40 backdrop-blur-md bg-white/80 border-b border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center" aria-label="Web Lista YA">
          <img src={logo} alt="Web Lista YA" className="h-10 sm:h-12 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#1F2937]">
          <a href="#beneficios" className="hover:text-black transition-colors">Beneficios</a>
          <a href="#proceso" className="hover:text-black transition-colors">Cómo funciona</a>
          <a href="#portfolio" className="hover:text-black transition-colors">Ejemplos</a>
          <a href="#contacto" className="hover:text-black transition-colors">Contacto</a>
          <a href="#faq" className="hover:text-black transition-colors">FAQ</a>
        </nav>
        <a
          href="https://wa.me/5491100000000?text=Hola!%20Quiero%20info%20sobre%20mi%20web."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full px-4 sm:px-5 h-10 text-sm font-semibold text-[#0B0F14] shadow-[0_6px_20px_-6px_rgba(110,235,0,0.6)] hover:shadow-[0_10px_28px_-6px_rgba(110,235,0,0.7)] hover:-translate-y-0.5 transition-all"
          style={{ background: "linear-gradient(135deg, #A3FF12 0%, #6EEB00 100%)" }}
        >
          Crear mi web
        </a>
      </div>
    </motion.header>
  );
}
