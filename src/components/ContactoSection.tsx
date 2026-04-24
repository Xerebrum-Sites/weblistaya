import { motion } from "framer-motion";

export function ContactoSection() {
  return (
    <section
      id="contacto"
      className="relative py-32 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #c8fb6a 0%, #000000 70%)",
      }}
    >
      <div className="relative max-w-md mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-12 font-semibold text-[#c8fb6a]"
        >
          Contacto
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg mb-10 leading-relaxed font-semibold text-white"
        >
          Escribinos y te contamos cómo podemos ayudarte.
        </motion.p>
        <motion.form
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Tu nombre"
            className="w-full bg-transparent border-b border-border pb-3 text-base font-light placeholder:text-white focus:outline-none focus:border-foreground transition-colors text-white"
          />
          <input
            type="email"
            placeholder="Tu email"
            className="w-full bg-transparent border-b border-border pb-3 text-base font-light placeholder:text-white focus:outline-none focus:border-foreground transition-colors text-white"
          />
          <textarea
            placeholder="Contanos qué necesitás"
            rows={4}
            className="w-full bg-transparent border-b border-border pb-3 text-base font-light placeholder:text-white focus:outline-none focus:border-foreground transition-colors resize-none text-white"
          />
          <button
            type="submit"
            className="mt-4 rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground tracking-wide transition-all hover:opacity-80"
          >
            Quiero mi presupuesto gratis
          </button>
        </motion.form>
      </div>
    </section>
  );
}
