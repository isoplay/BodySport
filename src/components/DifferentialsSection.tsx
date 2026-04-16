/*
 * BODY SPORT ACADEMIA — Differentials Section
 * Design: Industrial Power — full-width dark section with red accents
 * Layout: 2x2 grid with large icons and bold text
 */

import { motion, useInView } from "framer-motion";
import { Cpu, Award, Flame, DollarSign } from "lucide-react";
import { useRef } from "react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663565280710/Xi6NfPn7ufzY7wJmYSmtGZ/hero-gym-j7PoD9adVAisMJw6mBgezT.webp";

const differentials = [
  {
    icon: Cpu,
    number: "01",
    title: "Equipamentos Modernos",
    description:
      "Investimos constantemente em tecnologia de ponta para oferecer o melhor em performance e segurança.",
  },
  {
    icon: Award,
    number: "02",
    title: "Profissionais Qualificados",
    description:
      "Nossa equipe é formada por educadores físicos certificados e especializados nas mais diversas áreas.",
  },
  {
    icon: Flame,
    number: "03",
    title: "Ambiente Motivador",
    description:
      "Um espaço projetado para inspirar, com música, iluminação e energia que impulsionam seu treino.",
  },
  {
    icon: DollarSign,
    number: "04",
    title: "Planos Acessíveis",
    description:
      "Acreditamos que saúde é para todos. Oferecemos planos flexíveis que cabem no seu bolso.",
  },
];

export default function DifferentialsSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="diferenciais"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.08) contrast(1.2)", objectPosition: "center 40%" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,10,10,0.85)" }}
        />
      </div>

      {/* Background number */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "20rem",
          color: "rgba(204,0,0,0.04)",
          lineHeight: 1,
        }}
      >
        03
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="section-label mb-4">Por que nos escolher</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              Nossos <span style={{ color: "#cc0000" }}>Diferenciais</span>
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "400px",
                lineHeight: 1.6,
              }}
            >
              Tudo o que você precisa para alcançar seus objetivos em um só lugar.
            </p>
          </div>
          <div className="red-line mt-4" />
        </motion.div>

        {/* Differentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentials.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="relative group flex gap-6 p-6 md:p-8"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  transition: "border-color 0.3s, background 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)";
                  e.currentTarget.style.background = "rgba(212,175,55,0.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                }}
              >
                {/* Number */}
                <div
                  className="absolute top-4 right-4 select-none"
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "3rem",
                    color: "rgba(204,0,0,0.15)",
                    lineHeight: 1,
                  }}
                >
                  {item.number}
                </div>

                {/* Icon */}
                <div
                  className="flex-shrink-0 w-14 h-14 flex items-center justify-center"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <Icon size={26} color="#d4af37" />
                </div>

                {/* Content */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "1.5rem",
                      color: "#ffffff",
                      letterSpacing: "0.03em",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(255,255,255,0.6)",
                      lineHeight: 1.7,
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
