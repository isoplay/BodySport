/*
 * BODY SPORT ACADEMIA — Testimonials Section
 * Design: Industrial Power — dark cards with star ratings
 * Layout: Horizontal scroll on mobile, grid on desktop
 */

import { motion, useInView } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useRef } from "react";

const testimonials = [
  {
    name: "Angela Gava",
    age: 63,
    text: "Desde que comecei a treinar na Bodysport, percebi mudanças significativas na minha vida. O ambiente acolhedor e o suporte da equipe me fizeram sentir confortável e motivada desde o início. Os exercícios passaram a ser um momento importante na minha rotina, e com o tempo minhas crises de ansiedade diminuíram. Hoje me sinto mais forte, mais confiante e, acima de tudo, mais feliz.",
    stars: 5,
    initials: "AG",
  },
  {
    name: "Marilza Cogo",
    age: 46,
    text: "Tenho vários problemas de saúde, várias hérnias de disco, artropatia degenerativa na lombar, síndrome do túnel do carpo, tendinite, cisto de Baker... Fazia várias sessões de fisioterapia, não resolvia. Até que entrei na academia, com 15 dias, cancelei 50 sessões de fisioterapia. Passei a ter qualidade de vida, com queda de 90% das dores. Minha eterna gratidão a vocês.",
    stars: 5,
    initials: "MC",
  },
  {
    name: "Maria do Carmo",
    age: 50,
    text: "Passei anos convivendo com dores no ombro e no joelho, eu tinha duas cirurgias pré agendadas, uma para cada região. Com o acompanhamento de profissionais qualificados e um plano de musculação personalizado, fui surpreendida pelos resultados. Aos poucos, as dores começaram a diminuir. Hoje, para minha alegria, não apenas estou sem dores, mas também cancelei as cirurgias. Sou eternamente grata à equipe da Bodysport.",
    stars: 5,
    initials: "MDC",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="#d4af37" color="#d4af37" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="depoimentos"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background decoration */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(212,175,55,0.3) 20px, rgba(212,175,55,0.3) 21px)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center mb-4">Depoimentos</div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#ffffff",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            Histórias de
            <br />
            <span style={{ color: "#d4af37" }}>transformação</span>
          </h2>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              maxWidth: "500px",
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Você também pode mudar sua qualidade de vida!
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="h-full flex flex-col p-6 md:p-8 transition-all duration-300"
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.06)",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)";
                  e.currentTarget.style.background = "#151515";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "#111111";
                }}
              >
                {/* Quote Icon */}
                <Quote size={24} color="#d4af37" className="mb-4" />

                {/* Stars */}
                <div className="mb-4">
                  <StarRating count={testimonial.stars} />
                </div>

                {/* Text */}
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(255,255,255,0.7)",
                    lineHeight: 1.8,
                    marginBottom: "1.5rem",
                    flex: 1,
                  }}
                >
                  "{testimonial.text}"
                </p>

                {/* Divider */}
                <div
                  className="w-8 h-0.5 mb-4"
                  style={{ background: "#d4af37" }}
                />

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 flex items-center justify-center"
                    style={{
                      background: "#d4af37",
                      clipPath: "polygon(0 0, calc(100% - 6px) 0, 100% 6px, 100% 100%, 6px 100%, 0 calc(100% - 6px))",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "0.8rem",
                        color: "#0a0a0a",
                        fontWeight: 900,
                      }}
                    >
                      {testimonial.initials}
                    </span>
                  </div>
                  <div>
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "0.95rem",
                        color: "#ffffff",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {testimonial.name}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.5)",
                      }}
                    >
                      {testimonial.age} anos
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.6)",
              marginBottom: "1.5rem",
            }}
          >
            Sua história de transformação pode começar hoje!
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#contato");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2"
            style={{
              background: "#d4af37",
              color: "#0a0a0a",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
              border: "none",
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f0d78a";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#d4af37";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Comece Agora
          </button>
        </motion.div>
      </div>
    </section>
  );
}
