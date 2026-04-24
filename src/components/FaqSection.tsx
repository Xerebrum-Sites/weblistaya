import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "¿Cuánto tarda en estar lista mi web?",
    a: "Entre 5 y 7 días hábiles desde que nos pasás el contenido. Si tenés apuro, lo conversamos.",
  },
  {
    q: "¿Y si necesito cambios después?",
    a: "Incluimos una ronda de cambios sin costo. Si después necesitás más, te pasamos un mantenimiento accesible.",
  },
  {
    q: "¿El dominio y el hosting están incluidos?",
    a: "Te asesoramos para que contrates ambos a tu nombre. Te pasamos los links y el paso a paso para que sea rapidísimo.",
  },
  {
    q: "¿Puedo pagar en cuotas?",
    a: "Sí. Aceptamos transferencia, Mercado Pago y cuotas con tarjeta. Lo conversamos al armar el presupuesto.",
  },
  {
    q: "¿Y si no me gusta el primer diseño?",
    a: "Lo ajustamos hasta que te encante. Y si no quedás conforme, te devolvemos el 100% de la seña.",
  },
];

export function FaqSection() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-2xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-sm tracking-widest uppercase text-muted-foreground mb-4 font-semibold"
        >
          Preguntas frecuentes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-12 leading-tight"
        >
          Resolvemos tus dudas.
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-lg font-semibold py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}