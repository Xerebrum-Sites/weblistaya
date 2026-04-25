import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "¿Cuánto tarda en estar lista mi web?", a: "Entre 5 y 7 días hábiles desde que nos pasás el contenido. Si tenés apuro, lo conversamos." },
  { q: "¿Y si necesito cambios después?", a: "Incluimos una ronda de cambios sin costo. Si después necesitás más, te pasamos un mantenimiento accesible." },
  { q: "¿El dominio y el hosting están incluidos?", a: "Te asesoramos para que contrates ambos a tu nombre. Te pasamos los links y el paso a paso para que sea rapidísimo." },
  { q: "¿Puedo pagar en cuotas?", a: "Sí. Aceptamos transferencia, Mercado Pago y cuotas con tarjeta. Lo conversamos al armar el presupuesto." },
  { q: "¿Y si no me gusta el primer diseño?", a: "Lo ajustamos hasta que te encante. Y si no quedás conforme, te devolvemos el 100% de la seña." },
];

export function FaqSection() {
  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs tracking-[0.2em] uppercase text-[#6EEB00] font-bold mb-4">
            Preguntas frecuentes
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-display font-bold text-[#0B0F14] text-3xl sm:text-4xl md:text-5xl leading-[1.1]"
          >
            Resolvemos tus dudas.
          </motion.h2>
        </div>
        <Accordion type="single" collapsible className="w-full text-left space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-black/5 bg-[#F5F7FA] rounded-2xl px-5 data-[state=open]:border-[#6EEB00]/40"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-base sm:text-lg text-[#0B0F14] py-5 hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-[#1F2937]/70 leading-relaxed pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
