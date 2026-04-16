/*
 * BODY SPORT ACADEMIA — WhatsApp Float Button
 * Design: Fixed floating button for quick WhatsApp access
 */

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5528999999999";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de saber mais sobre os planos da Body Sport Academia."
);

export default function WhatsAppFloat() {
  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`,
      "_blank"
    );
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 shadow-2xl"
      style={{
        background: "#25D366",
        color: "#ffffff",
        border: "none",
        clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
        fontFamily: "'Barlow Condensed', sans-serif",
        fontWeight: 700,
        fontSize: "0.85rem",
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "all 0.3s ease",
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#1da851";
        e.currentTarget.style.boxShadow = "0 6px 30px rgba(37,211,102,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#25D366";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
      }}
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 0] }}
        transition={{ repeat: Infinity, repeatDelay: 3, duration: 0.5 }}
      >
        <MessageCircle size={20} />
      </motion.div>
      <span className="hidden sm:inline">WhatsApp</span>
    </motion.button>
  );
}
