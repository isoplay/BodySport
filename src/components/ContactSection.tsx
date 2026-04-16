/*
 * BODY SPORT ACADEMIA — Contact Section
 * Design: Industrial Power — dark section with red CTA
 * Info: Address, Phone, WhatsApp button
 */

import { motion, useInView } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { useRef } from "react";

const HERO_IMAGE =
  "https://academiabodysport.my.canva.site/_assets/media/d7f91dbf4da07fb6a51ba9d8c7fd4684.jpg";

const WHATSAPP_NUMBER = "5528999195540";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de saber mais sobre os planos da Body Sport Academia."
);

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  const handlePhone = () => {
    window.open("tel:+5528999195540", "_blank");
  };

  return (
    <section
      id="contato"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: "brightness(0.06) contrast(1.3)", objectPosition: "center" }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "rgba(10,10,10,0.9)" }}
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
        05
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="section-label mb-4">Fale Conosco</div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 6vw, 5rem)",
                color: "#ffffff",
                lineHeight: 1,
                marginBottom: "1rem",
              }}
            >
              Venha treinar
              <br />
              <span style={{ color: "#cc0000" }}>com a gente</span>
            </h2>
            <div className="red-line mb-8" />

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Estamos prontos para te receber e ajudar a começar sua jornada de
              transformação. Entre em contato ou venha nos visitar!
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-5">
              {[
                {
                  icon: MapPin,
                  label: "Endereço",
                  value: "Av. Nossa Senhora da Penha, 766",
                  sub: "Castelo — ES",
                },
                {
                  icon: Phone,
                  label: "Telefone",
                  value: "(28) 99919—5540",
                  sub: "Ligue para nós",
                  action: handlePhone,
                },
                {
                  icon: Clock,
                  label: "Horário",
                  value: "Seg — Sex: 06h às 22h",
                  sub: "Sáb: 08h às 14h",
                },
              ].map((info) => {
                const Icon = info.icon;
                return (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex items-start gap-4 group"
                    onClick={info.action}
                    style={{ cursor: info.action ? "pointer" : "default" }}
                  >
              <div
                  className="flex-shrink-0 w-12 h-12 flex items-center justify-center transition-colors duration-300"
                  style={{
                    background: "rgba(212,175,55,0.1)",
                    border: "1px solid rgba(212,175,55,0.3)",
                  }}
                >
                  <Icon size={20} color="#d4af37" />
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Barlow Condensed', sans-serif",
                          fontSize: "0.7rem",
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "rgba(255,255,255,0.4)",
                          marginBottom: "2px",
                        }}
                      >
                        {info.label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontWeight: 600,
                          fontSize: "1rem",
                          color: "#ffffff",
                        }}
                      >
                        {info.value}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Barlow', sans-serif",
                          fontSize: "0.85rem",
                          color: "rgba(255,255,255,0.5)",
                        }}
                      >
                        {info.sub}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="p-8 md:p-10"
              style={{
                background: "#111111",
                border: "1px solid rgba(212,175,55,0.2)",
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
            >
              {/* Header */}
              <div
                className="mb-6 pb-6"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
              >
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    color: "#ffffff",
                    letterSpacing: "0.03em",
                    marginBottom: "0.5rem",
                  }}
                >
                  Comece Hoje Mesmo
                </h3>
                <p
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.5)",
                    lineHeight: 1.6,
                  }}
                >
                  Fale diretamente com nossa equipe pelo WhatsApp e conheça os
                  planos disponíveis.
                </p>
              </div>

              {/* Benefits list */}
              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Primeira aula experimental gratuita",
                  "Avaliação física inclusa",
                  "Sem taxa de matrícula no primeiro mês",
                  "Planos a partir de preços acessíveis",
                ].map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.3)" }}
                    >
                      <div className="w-2 h-2" style={{ background: "#d4af37" }} />
                    </div>
                    <span
                      style={{
                        fontFamily: "'Barlow', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* WhatsApp Button */}
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-3 py-4 transition-all duration-300 group"
                style={{
                  background: "#25D366",
                  color: "#ffffff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "none",
                  clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#1da851";
                  e.currentTarget.style.transform = "scale(1.02)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#25D366";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <MessageCircle size={22} />
                Fale no WhatsApp
              </button>

              {/* Phone button */}
              <button
                onClick={handlePhone}
                className="w-full flex items-center justify-center gap-3 py-3 mt-3 transition-all duration-300"
                style={{
                  background: "transparent",
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
                  e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                }}
              >
                <Phone size={16} />
                (28) 99919-5540
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
