/*
 * BODY SPORT ACADEMIA — Navbar Component
 * Design: Industrial Power — sticky, transparent to dark on scroll
 * Typography: Bebas Neue logo + Barlow Condensed nav links
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (y) => {
      setScrolled(y > 60);
    });
    return unsubscribe;
  }, [scrollY]);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(204,0,0,0.3)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#hero")}
            className="flex items-center gap-2 group"
          >
            <div className="relative w-10 h-10">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663565280710/Xi6NfPn7ufzY7wJmYSmtGZ/logo-bs_ef151f90.png"
                alt="Body Sport Academia"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.25rem",
                  letterSpacing: "0.05em",
                  color: "#ffffff",
                  lineHeight: 1,
                }}
              >
                BODY SPORT
              </span>
              <span
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.55rem",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.6)",
                  lineHeight: 1.2,
                  marginTop: "2px",
                }}
              >
                Seu objetivo é nossa meta!
              </span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="relative group"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#cccccc",
                  background: "none",
                  border: "none",
                  padding: "4px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#cccccc")}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "#cc0000" }}
                />
              </button>
            ))}
          </nav>

          {/* CTA Button Desktop */}
          <button
            className="hidden md:flex btn-primary"
            style={{ padding: "0.6rem 1.5rem", fontSize: "0.8rem" }}
            onClick={() => handleNavClick("#contato")}
          >
            <span>Começar Agora</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            style={{ color: "#ffffff", background: "none", border: "none" }}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden overflow-hidden"
        style={{ background: "rgba(10,10,10,0.98)", borderTop: "1px solid rgba(204,0,0,0.2)" }}
      >
        <div className="container py-6 flex flex-col gap-4">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => handleNavClick(link.href)}
              className="text-left py-2"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "1.25rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#ffffff",
                background: "none",
                border: "none",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              {link.label}
            </motion.button>
          ))}
          <button
            className="btn-primary mt-2"
            onClick={() => handleNavClick("#contato")}
          >
            <span>Começar Agora</span>
          </button>
        </div>
      </motion.div>
    </motion.header>
  );
}
