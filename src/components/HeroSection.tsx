/*
 * BODY SPORT ACADEMIA — Hero Section
 * Design: Industrial Power — full viewport, parallax bg, diagonal cut bottom
 * Image: dark gym with red lighting
 * Text: white on dark overlay, Bebas Neue display
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";

const HERO_IMAGE =
  "https://academiabodysport.my.canva.site/_assets/media/14a63c112f524c71501c3e3fd9e23fd5.jpg";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const handleScrollDown = () => {
    const el = document.querySelector("#sobre");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100svh" }}
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: bgY, scale: 1.1 }}
      >
        <img
          src={HERO_IMAGE}
          alt="Body Sport Academia"
          className="w-full h-full object-cover"
          style={{ objectPosition: "center center" }}
        />
        {/* Multi-layer overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.65) 50%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(10,10,10,1) 0%, transparent 40%)",
          }}
        />
        {/* Gold vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 50%, rgba(212,175,55,0.08) 0%, transparent 60%)",
          }}
        />
      </motion.div>

      {/* Decorative vertical red line */}
            <div
        className="absolute left-0 top-0 bottom-0 w-1 hidden lg:block"
        style={{ background: "linear-gradient(to bottom, transparent, #d4af37, transparent)" }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 container flex flex-col justify-center"
        style={{ minHeight: "100svh", y: textY, opacity }}
      >
        <div className="max-w-3xl pt-20 pb-32">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-label mb-6"
          >
            Castelo — ES
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 10vw, 8rem)",
              lineHeight: 0.95,
              color: "#ffffff",
              letterSpacing: "0.02em",
            }}
          >
            Começe a treinar
            <br />
              <span style={{ color: "#d4af37" }}>hoje mesmo</span>
            <br />
            na melhor academia do sul do estado!
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.75)",
              marginTop: "1.5rem",
              marginBottom: "2.5rem",
              maxWidth: "480px",
              lineHeight: 1.6,
            }}
          >
            Seu objetivo é nossa meta! Atendimento premium, equipamentos de alta qualidade e ambiente acolhedor.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="flex flex-wrap gap-4"
          >
            <button
              className="btn-primary"
              onClick={() => {
                const el = document.querySelector("#contato");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Começar Agora</span>
            </button>
            <button
              className="btn-outline"
              onClick={() => {
                const el = document.querySelector("#servicos");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Ver Serviços</span>
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-8 mt-12 pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            {[
              { value: "500+", label: "Alunos Ativos" },
              { value: "10+", label: "Anos de Experiência" },
              { value: "15+", label: "Profissionais" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "2rem",
                    color: "#cc0000",
                    lineHeight: 1,
                  }}
                >
                  {stat.value}
                </span>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    marginTop: "4px",
                  }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ background: "none", border: "none" }}
      >
        <span
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ChevronDown size={20} color="rgba(255,255,255,0.4)" />
        </motion.div>
      </motion.button>

      {/* Bottom diagonal cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 z-10"
        style={{
          background: "#0a0a0a",
          clipPath: "polygon(0 100%, 100% 0, 100% 100%)",
        }}
      />
    </section>
  );
}
