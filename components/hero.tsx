"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FileText, Sparkles } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"

export default function Hero() {
  const handlePlanClick = () => {
    window.open("https://app.smarterbot.cl", "_blank")
  }

  const handleDemoClick = () => {
    window.open("https://app.smarterbot.cl/dashboard", "_blank")
  }

  return (
    <div className="relative min-h-[calc(100vh-76px)] flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={6} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              BOLT Gerente AI
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {" "}
                Vende sin parar
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl mx-auto px-4"
          >
            Automatiza TUS ventas, gestiona TU inventario y atiende a TUS clientes 24/7 con inteligencia artificial en
            WhatsApp Business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 w-full sm:w-auto"
              onClick={handlePlanClick}
            >
              <FileText className="mr-2 h-5 w-5" />
              Ver Planes
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-white border-purple-500 hover:bg-purple-500/20 bg-transparent w-full sm:w-auto"
              onClick={handleDemoClick}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Demo Gratis
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Animated robot - hidden on mobile for better performance */}
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 hidden md:block">
        <RoboAnimation />
      </div>
    </div>
  )
}
