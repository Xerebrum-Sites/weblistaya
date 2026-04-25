import logo from "@/assets/logo-weblistaya.png";

export function Footer() {
  return (
    <footer className="py-10 px-4 sm:px-6 bg-[#0B0F14] text-white/60">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Web Lista YA" className="h-7 w-auto brightness-0 invert opacity-90" />
        </div>
        <p className="text-xs">© {new Date().getFullYear()} Web Lista YA · Hecho en Argentina</p>
      </div>
    </footer>
  );
}
