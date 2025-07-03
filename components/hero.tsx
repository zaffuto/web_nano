"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Play, Sparkles, Bot, MessageSquare, CreditCard, Zap } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"

export default function Hero() {
  const handlePlanClick = () => {
    // Scroll to the pricing section instead of opening a new page
    document.getElementById("planes")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleDemoClick = () => {
    window.open("https://app.smarterbot.cl", "_blank")
  }

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Floating papers background */}
      <div className="absolute inset-0 overflow-hidden">
        <FloatingPaper count={8} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
                <Bot className="w-4 h-4 text-purple-400 mr-2" />
                <span className="text-purple-300 text-sm font-medium">Automatización con IA</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                SmarterBot: Tu Aliado
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {" "}
                  Digital 24/7
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed">
                La inteligencia artificial que habla, vende y resuelve en WhatsApp.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                SmarterBot integra WhatsApp, Mercado Pago, automatizaciones con N8N y mucho más para que tu negocio
                funcione incluso mientras dormís. Atención al cliente, venta directa, pagos y reportes automáticos desde
                un solo lugar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8" onClick={handleDemoClick}>
                <Play className="mr-2 h-5 w-5" />
                Iniciar Sesión
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-purple-500 hover:bg-purple-500/20 bg-transparent"
                onClick={handlePlanClick}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
            >
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-sm text-gray-400">Disponibilidad</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-400">Empresas</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
                <div className="text-sm text-gray-400">Uptime</div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative lg:block hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Main Bot Animation */}
              <div className="relative z-10">
                <RoboAnimation />
              </div>

              {/* Floating Feature Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute top-10 -left-10 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <MessageSquare className="w-6 h-6 text-green-400 mb-2" />
                <p className="text-white text-sm font-medium">WhatsApp</p>
                <p className="text-gray-400 text-xs">Business API</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute top-32 -right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <CreditCard className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-white text-sm font-medium">Pagos</p>
                <p className="text-gray-400 text-xs">Automáticos</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <Zap className="w-6 h-6 text-yellow-400 mb-2" />
                <p className="text-white text-sm font-medium">N8N</p>
                <p className="text-gray-400 text-xs">Automatización</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
