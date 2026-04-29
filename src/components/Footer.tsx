import logo from "@/assets/logo-negativo.png";
import { Mail, MessageCircle } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-4 sm:px-6 bg-[#0B0F14] text-white/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Web Lista YA" className="h-10 w-auto" />
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5 text-xs">
          <a
            href="mailto:quiero@weblistaya.com.ar"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>quiero@weblistaya.com.ar</span>
          </a>
          <a
            href="https://wa.me/5493412604109?text=Hola!%20Quiero%20info%20sobre%20mi%20web."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>+54 9 341 260-4109</span>
          </a>
        </div>
        <p className="text-xs">© {year} Web Lista YA</p>
      </div>
    </footer>
  );
}
