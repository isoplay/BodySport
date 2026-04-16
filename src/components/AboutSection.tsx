/*
 * BODY SPORT ACADEMIA — About Section
 * Design: Industrial Power — asymmetric layout, image left, text right
 * Image: equipment close-up with red accents
 */

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const ABOUT_IMAGE =
  "https://academiabodysport.my.canva.site/_assets/media/71f59686cd0883d273a79e43cac9f0ff.jpg";

const highlights = [
  "Atendimento premium e personalizado",
  "Equipamentos de alta qualidade",
  "Espaço climatizado e acolhedor",
  "Profissionais qualificados",
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="sobre"
      ref={ref}
      className="relative py-24 md:py-32 overflow-hidden"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background number decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden lg:block"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "20rem",
          color: "rgba(204,0,0,0.04)",
          lineHeight: 1,
          userSelect: "none",
        }}
      >
        01
      </div>

      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden"
              style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
            >
              <img
                src={ABOUT_IMAGE}
                alt="Equipamentos Body Sport Academia"
                className="w-full h-80 md:h-[500px] object-cover"
                style={{ filter: "contrast(1.1) brightness(0.9)" }}
              />
              {/* Red overlay on hover */}
              <div
                className="absolute inset-0 opacity-0 hover:opacity-20 transition-opacity duration-500"
                style={{ background: "#cc0000" }}
              />
            </div>

            {/* Decorative red border */}
            <div
              className="absolute -bottom-4 -right-4 w-3/4 h-3/4 -z-10"
              style={{
                border: "2px solid rgba(212,175,55,0.3)",
                clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))",
              }}
            />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 left-8 p-4"
              style={{
                background: "#d4af37",
                clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2.5rem",
                    color: "#0a0a0a",
                    lineHeight: 1,
                  }}
              >
                10+
              </div>
              <div
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.7rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(10,10,10,0.85)",
                  }}
              >
                Anos de Excelência
              </div>
            </motion.div>
          </motion.div>

          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 lg:pt-0"
          >
            <div className="section-label mb-4">Sobre Nós</div>

            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "#ffffff",
                lineHeight: 1,
                marginBottom: "1.5rem",
              }}
            >
            Bem-vindo à
            <br />
            <span style={{ color: "#d4af37" }}>bodysport!</span>
            </h2>

            <div className="red-line mb-6" />

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.8,
                marginBottom: "2rem",
              }}
            >
              Aqui, sua experiência é nossa prioridade. Oferecemos um atendimento premium, pensado para atender às suas necessidades com excelência e personalização. Nossa academia conta com equipamentos de alta qualidade e variedade, garantindo que você alcançe seus objetivos com eficiência e conforto.
            </p>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Localizada no coração de Castelo — ES, somos referência em fitness
              e bem-estar para toda a região. Nossa equipe de profissionais
              qualificados está pronta para transformar sua rotina.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={18} color="#d4af37" style={{ flexShrink: 0 }} />
                  <span
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      color: "rgba(255,255,255,0.8)",
                    }}
                  >
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
