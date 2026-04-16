/*
 * BODY SPORT ACADEMIA — Gallery Section
 * Design: Industrial Power — showcase real academy images
 */

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  {
    url: "https://academiabodysport.my.canva.site/_assets/media/14a63c112f524c71501c3e3fd9e23fd5.jpg",
    title: "Equipamentos Modernos",
    category: "Musculação",
  },
  {
    url: "https://academiabodysport.my.canva.site/_assets/media/71f59686cd0883d273a79e43cac9f0ff.jpg",
    title: "Área de Treinamento",
    category: "Funcional",
  },
  {
    url: "https://academiabodysport.my.canva.site/_assets/media/2fb193cae343a697cc5914db2204eed2.jpg",
    title: "Ambiente Premium",
    category: "Geral",
  },
  {
    url: "https://academiabodysport.my.canva.site/_assets/media/d7f91dbf4da07fb6a51ba9d8c7fd4684.jpg",
    title: "Infraestrutura Completa",
    category: "Instalações",
  },
];

export default function GallerySection() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <section
      id="galeria"
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
          <div className="section-label justify-center mb-4">Galeria</div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              color: "#ffffff",
              lineHeight: 1,
              marginBottom: "1rem",
            }}
          >
            Conheça nossa
            <br />
            <span style={{ color: "#d4af37" }}>infraestrutura</span>
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
            Equipamentos modernos, ambiente motivador e profissionais qualificados.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.url}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedImage(image)}
              className="relative group cursor-pointer overflow-hidden"
              style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
            >
              {/* Image */}
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                style={{
                  filter: "brightness(0.7) contrast(1.1)",
                }}
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6"
              >
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.5rem",
                    color: "#ffffff",
                    letterSpacing: "0.05em",
                    marginBottom: "0.5rem",
                  }}
                >
                  {image.title}
                </h3>
                <div
                  className="w-8 h-0.5"
                  style={{ background: "#d4af37", marginBottom: "0.5rem" }}
                />
                <p
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {image.category}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            Quer conhecer pessoalmente? Agende sua aula experimental agora!
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
            Agendar Visita
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.9)" }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 text-white hover:text-yellow-400 transition-colors"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              <X size={32} />
            </button>

            {/* Image */}
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto"
              style={{
                clipPath: "polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))",
              }}
            />

            {/* Info */}
            <div
              className="p-6 mt-4"
              style={{
                background: "#111111",
                border: "1px solid rgba(212,175,55,0.3)",
                clipPath: "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.5rem",
                  color: "#d4af37",
                  letterSpacing: "0.05em",
                  marginBottom: "0.5rem",
                }}
              >
                {selectedImage.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Barlow', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                {selectedImage.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
