/*
 * BODY SPORT ACADEMIA — Services Section
 * Design: Industrial Power — dark cards with red hover, diagonal clip
 * Services: Musculação, Funcional, Personal, Avaliação Física
 */

import { motion, useInView } from "framer-motion";
import { Dumbbell, Zap, User, ClipboardList } from "lucide-react";
import { useRef, useState } from "react";

const ATHLETE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663565280710/Xi6NfPn7ufzY7wJmYSmtGZ/training-athlete-D6GCho5qw9oXTLfBACA2CW.webp";

const FUNCTIONAL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663565280710/Xi6NfPn7ufzY7wJmYSmtGZ/functional-training-niywPX2hYDD2uSSA4fvz2j.webp";

const PERSONAL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663565280710/Xi6NfPn7ufzY7wJmYSmtGZ/personal-trainer-DZ9ZycvRUnLgGKWM73PQL7.webp";

const ABOUT_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663565280710/Xi6NfPn7ufzY7wJmYSmtGZ/about-gym-RtgTPeJWFkuVsu8e2RCxry.webp";

const services = [
  {
    icon: Dumbbell,
    title: "Musculação",
    description:
      "Área completa com equipamentos de última geração para hipertrofia, definição e condicionamento físico.",
    image: ATHLETE_IMAGE,
    tag: "Mais Popular",
  },
  {
    icon: Zap,
    title: "Treinamento Funcional",
    description:
      "Treinos dinâmicos que melhoram força, resistência, equilíbrio e coordenação motora.",
    image: FUNCTIONAL_IMAGE,
    tag: null,
  },
  {
    icon: User,
    title: "Personal Trainer",
    description:
      "Acompanhamento individualizado com profissionais certificados para maximizar seus resultados.",
    image: PERSONAL_IMAGE,
    tag: "Premium",
  },
  {
    icon: ClipboardList,
    title: "Avaliação Física",
    description:
      "Avaliação completa com medidas antropométricas e prescrição de treino personalizada.",
    image: ABOUT_IMAGE,
    tag: null,
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="servicos"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0d0d0d" }}
    >
      {/* Background decoration */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "20rem",
          color: "rgba(204,0,0,0.03)",
          lineHeight: 1,
        }}
      >
        02
      </div>

      {/* Top diagonal */}
      <div
        className="absolute top-0 left-0 right-0 h-16"
        style={{
          background: "#0a0a0a",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="section-label justify-center mb-4">
            O que oferecemos
          </div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            Nossos <span style={{ color: "#cc0000" }}>Serviços</span>
          </h2>
          <div className="red-line mx-auto mt-4" />
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === i;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="relative overflow-hidden group"
                style={{
                  background: "#111111",
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  cursor: "pointer",
                  transition: "transform 0.3s ease",
                  transform: isHovered ? "translateY(-8px)" : "translateY(0)",
                }}
              >
                {/* Background image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700"
                    style={{
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      filter: "brightness(0.5) contrast(1.1)",
                    }}
                  />
                  <div
                    className="absolute inset-0 transition-opacity duration-300"
                    style={{
                      background: isHovered
                        ? "linear-gradient(to bottom, rgba(204,0,0,0.4), rgba(0,0,0,0.8))"
                        : "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7))",
                    }}
                  />

                  {/* Tag */}
                  {service.tag && (
                    <div
                      className="absolute top-3 right-3 px-2 py-1"
            style={{
              background: "#d4af37",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#0a0a0a",
            }}
                    >
                      {service.tag}
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className="absolute bottom-4 left-4 p-3 transition-all duration-300"
                    style={{
                      background: isHovered ? "#d4af37" : "rgba(212,175,55,0.2)",
                      border: "1px solid rgba(212,175,55,0.5)",
                    }}
                  >
                    <Icon size={22} color="#ffffff" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      letterSpacing: "0.05em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </p>

                  {/* Bottom gold line on hover */}
                  <div
                    className="mt-4 h-0.5 transition-all duration-300"
                    style={{
                      background: "#d4af37",
                      width: isHovered ? "100%" : "0%",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
