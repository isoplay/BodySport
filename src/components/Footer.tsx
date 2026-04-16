/*
 * BODY SPORT ACADEMIA — Footer Component
 * Design: Industrial Power — dark footer with social icons and copyright
 */

import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, MapPin, Phone } from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    href: "https://instagram.com/academiabodysport",
    label: "Instagram",
  },
  {
    icon: Facebook,
    href: "https://facebook.com/academiabodysport",
    label: "Facebook",
  },
  {
    icon: Youtube,
    href: "https://youtube.com/academiabodysport",
    label: "YouTube",
  },
];

const navLinks = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid rgba(212,175,55,0.2)",
      }}
    >
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand Column */}
          <div>
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 flex items-center justify-center"
                style={{
                  background: "#d4af37",
                  clipPath: "polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px))",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1rem",
                    color: "#0a0a0a",
                    lineHeight: 1,
                    fontWeight: 900,
                  }}
                >
                  bs
                </span>
              </div>
              <div className="flex flex-col leading-none">
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.3rem",
                    letterSpacing: "0.05em",
                    color: "#ffffff",
                    lineHeight: 1,
                  }}
                >
                  BODY SPORT
                </span>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "0.6rem",
                    letterSpacing: "0.3em",
                    color: "#d4af37",
                    textTransform: "uppercase",
                    lineHeight: 1,
                    marginTop: "2px",
                  }}
                >
                  ACADEMIA
                </span>
              </div>
            </div>

            <p
              style={{
                fontFamily: "'Barlow', sans-serif",
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.7,
                marginBottom: "1.5rem",
              }}
            >
              Transformando vidas através do esporte e do bem-estar em Castelo — ES.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 flex items-center justify-center transition-all duration-300"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.5)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#d4af37";
                      e.currentTarget.style.borderColor = "#d4af37";
                      e.currentTarget.style.color = "#0a0a0a";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem",
                color: "#ffffff",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              Navegação
            </h4>
              <div
                className="w-8 h-0.5 mb-4"
                style={{ background: "#d4af37" }}
              />
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left transition-colors duration-200"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.45)",
                    background: "none",
                    border: "none",
                    padding: "2px 0",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "1.1rem",
                color: "#ffffff",
                letterSpacing: "0.1em",
                marginBottom: "1rem",
              }}
            >
              Contato
            </h4>
            <div
              className="w-8 h-0.5 mb-4"
              style={{ background: "#d4af37" }}
            />
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                  <MapPin size={16} color="#d4af37" style={{ flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p
                    style={{
                      fontFamily: "'Barlow', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.5)",
                      lineHeight: 1.6,
                    }}
                  >
                    Av. Nossa Senhora da Penha, 766
                    <br />
                    Castelo — ES, 29360-000
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} color="#d4af37" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+552835420304"
                  style={{
                    fontFamily: "'Barlow', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.5)",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#d4af37")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                >
                  (28) 3542-0304
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            © {new Date().getFullYear()} Body Sport Academia. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "'Barlow', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Castelo — ES, Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
