/*
 * BODY SPORT ACADEMIA — Plans Section
 * Design: Industrial Power — showcase pricing plans with highlights
 */

import { motion, useInView } from "framer-motion";
import { Check, Zap } from "lucide-react";
import { useRef } from "react";

const plans = [
  {
    name: "Mensal 3x/Semana",
    price: 160,
    priceAlt: 145,
    priceAltLabel: "Dinheiro",
    period: "por mês",
    description: "Acesso 3 vezes por semana",
    features: [
      "Acesso à academia 3x/semana",
      "Uso de todos os equipamentos",
      "Vestiários e chuveiros",
      "Atendimento ao cliente",
    ],
    highlighted: false,
    badge: null,
  },
  {
    name: "Mensal Livre",
    price: 149.9,
    period: "por mês",
    description: "Acesso ilimitado todos os dias",
    features: [
      "Acesso ilimitado 24/7",
      "Uso de todos os equipamentos",
      "Vestiários e chuveiros",
      "Atendimento prioritário",
      "Avaliação física mensal",
    ],
    highlighted: true,
    badge: "Mais Popular",
  },
  {
    name: "Semestral",
    price: 139,
    period: "por mês",
    description: "6 meses de compromisso",
    features: [
      "Acesso ilimitado 24/7",
      "Uso de todos os equipamentos",
      "Vestiários e chuveiros",
      "Atendimento prioritário",
      "Avaliação física trimestral",
      "Desconto de 13% vs. mensal",
    ],
    highlighted: false,
    badge: null,
    totalPrice: 834,
  },
  {
    name: "Anual",
    price: 119,
    period: "por mês",
    description: "12 meses de compromisso",
    features: [
      "Acesso ilimitado 24/7",
      "Uso de todos os equipamentos",
      "Vestiários e chuveiros",
      "Atendimento VIP",
      "Avaliação física bimestral",
      "Desconto de 26% vs. mensal",
    ],
    highlighted: false,
    badge: "Melhor Custo",
    totalPrice: 1428,
  },
];

export default function PlansSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleSelectPlan = (planName: string) => {
    const el = document.querySelector("#contato");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        alert(`Você selecionou o plano: ${planName}\n\nFale com nossa equipe para mais informações!`);
      }, 500);
    }
  };

  return (
    <section
      id="planos"
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
          <div className="section-label justify-center mb-4">Planos</div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#ffffff",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            Escolha seu
            <br />
            <span style={{ color: "#d4af37" }}>plano ideal</span>
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
            Temos opções flexíveis para todos os objetivos e rotinas.
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card */}
              <div
                className="h-full flex flex-col p-6 md:p-8 transition-all duration-300"
                style={{
                  background: plan.highlighted ? "#1a1a1a" : "#111111",
                  border: `2px solid ${plan.highlighted ? "#d4af37" : "rgba(255,255,255,0.06)"}`,
                  clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
                  transform: plan.highlighted ? "scale(1.02)" : "scale(1)",
                }}
                onMouseEnter={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.borderColor = "rgba(212,175,55,0.4)";
                    e.currentTarget.style.background = "#151515";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.background = "#111111";
                  }
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <div
                    className="absolute -top-3 left-6 px-3 py-1"
                    style={{
                      background: "#d4af37",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#0a0a0a",
                      clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                    }}
                  >
                    {plan.badge}
                  </div>
                )}

                {/* Plan Name */}
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.3rem",
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                    marginTop: plan.badge ? "1rem" : "0",
                  }}
                >
                  {plan.name}
                </h3>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "1.5rem",
                  }}
                >
                  {plan.description}
                </p>

                {/* Pricing */}
                <div className="mb-6">
                  <div
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "2.5rem",
                      color: "#d4af37",
                      lineHeight: 1,
                    }}
                  >
                    R$ {plan.price.toFixed(2).replace(".", ",")}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.4)",
                    }}
                  >
                    {plan.period}
                  </div>
                  {plan.priceAlt && (
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(212,175,55,0.7)",
                        marginTop: "0.5rem",
                      }}
                    >
                      R$ {plan.priceAlt.toFixed(2).replace(".", ",")} ({plan.priceAltLabel})
                    </div>
                  )}
                  {plan.totalPrice && (
                    <div
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.75rem",
                        color: "rgba(212,175,55,0.7)",
                        marginTop: "0.5rem",
                      }}
                    >
                      Total: R$ {plan.totalPrice.toLocaleString("pt-BR")}\n                    </div>
                  )}
                </div>

                {/* Features */}
                <div className="flex-1 mb-6">
                  <div className="flex flex-col gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check
                          size={16}
                          color="#d4af37"
                          style={{ flexShrink: 0, marginTop: "2px" }}
                        />
                        <span
                          style={{
                            fontFamily: "'Barlow', sans-serif",
                            fontSize: "0.85rem",
                            color: "rgba(255,255,255,0.7)",
                            lineHeight: 1.4,
                          }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => handleSelectPlan(plan.name)}
                  className="w-full py-3 transition-all duration-300 group/btn"
                  style={{
                    background: plan.highlighted ? "#d4af37" : "transparent",
                    color: plan.highlighted ? "#0a0a0a" : "#d4af37",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    border: `2px solid ${plan.highlighted ? "#d4af37" : "#d4af37"}`,
                    clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                  }}
                  onMouseEnter={(e) => {
                    if (plan.highlighted) {
                      e.currentTarget.style.background = "#f0d78a";
                    } else {
                      e.currentTarget.style.background = "rgba(212,175,55,0.1)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (plan.highlighted) {
                      e.currentTarget.style.background = "#d4af37";
                    } else {
                      e.currentTarget.style.background = "transparent";
                    }
                  }}
                >
                  <div className="flex items-center justify-center gap-2">
                    {plan.highlighted && <Zap size={16} />}
                    Escolher Plano
                  </div>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.9rem",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            ✓ Primeira aula experimental gratuita
            <br />
            ✓ Avaliação física inclusa
            <br />
            ✓ Sem taxa de matrícula no primeiro mês
          </p>
        </motion.div>
      </div>
    </section>
  );
}
