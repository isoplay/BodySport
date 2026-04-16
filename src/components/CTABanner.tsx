/*
 * BODY SPORT ACADEMIA — CTA Banner
 * Design: Industrial Power — full-width red banner between sections
 */

import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";

export default function CTABanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleClick = () => {
    const el = document.querySelector("#contato");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      ref={ref}
      className="relative overflow-hidden py-16 md:py-20"
      style={{ background: "#d4af37" }}
    >
      {/* Decorative diagonal lines */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,0.3) 20px, rgba(0,0,0,0.3) 21px)",
        }}
      />

      {/* Large background text */}
      <div
        className="absolute inset-0 flex items-center justify-center select-none pointer-events-none overflow-hidden"
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(6rem, 20vw, 18rem)",
          color: "rgba(0,0,0,0.08)",
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        BODY SPORT
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                color: "#0a0a0a",
                lineHeight: 1,
                letterSpacing: "0.02em",
              }}
            >
              Está na hora de
              <br />
              transformar sua vida!
            </h2>
            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "1rem",
                color: "rgba(10,10,10,0.7)",
                marginTop: "0.5rem",
              }}
            >
              Na Bodysport, acreditamos que cada treino é um passo rumo à sua melhor versão. Não espere mais! Dê o primeiro passo hoje.
            </p>
          </div>

          <button
            onClick={handleClick}
            className="flex items-center gap-3 group flex-shrink-0"
            style={{
              background: "#0a0a0a",
              color: "#d4af37",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 800,
              fontSize: "1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "1rem 2.5rem",
              border: "none",
              clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#d4af37";
              e.currentTarget.style.color = "#0a0a0a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#0a0a0a";
              e.currentTarget.style.color = "#d4af37";
            }}
          >
            Começar Agora
            <ArrowRight
              size={20}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </div>
  );
}
