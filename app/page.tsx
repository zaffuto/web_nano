import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import HowItWorksSection from "@/components/how-it-works-section"
import BenefitsSection from "@/components/benefits-section"
import PricingSection from "@/components/pricing-section"
import WhatsAppSection from "@/components/whatsapp-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <HowItWorksSection />
        <BenefitsSection />
        <PricingSection />
        <WhatsAppSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  )
}
