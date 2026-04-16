/*
 * BODY SPORT ACADEMIA — Home Page
 * Design: Industrial Power — Brutalismo Fitness Premium
 * Sections: Hero, About, Services, Differentials, Testimonials, CTA, Contact, Footer
 */

import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import DifferentialsSection from "@/components/DifferentialsSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import PlansSection from "@/components/PlansSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#0a0a0a", color: "#ffffff" }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentialsSection />
      <GallerySection />
      <PlansSection />
      <CTABanner />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
