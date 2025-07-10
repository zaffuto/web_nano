"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MessageCircle, Clock, CheckCircle } from "lucide-react"
import { FloatingPaper } from "@/components/floating-paper"
import { RoboAnimation } from "@/components/robo-animation"

export default function Hero() {
  const handleContactClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=56979540471", "_blank")
  }

  const handleServicesClick = () => {
    document.getElementById("servicios")?.scrollIntoView({ behavior: "smooth" })
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
              <div className="inline-flex items-center px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30 mb-6">
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span className="text-green-300 text-sm font-medium">Solución en 90 minutos</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Conectamos y automatizamos
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {" "}
                  lo que necesitás
                </span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg md:text-xl mb-4 leading-relaxed">
                Respondemos por WhatsApp, conectamos tu agenda, armamos tus flujos.
              </p>
              <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                <strong className="text-white">Una sola vez. Pagás y listo.</strong> Sin mensualidades ni
                complicaciones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white px-8"
                onClick={handleContactClick}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Agendá solución ahora
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-white border-purple-500 hover:bg-purple-500/20 bg-transparent"
                onClick={handleServicesClick}
              >
                <Clock className="mr-2 h-5 w-5" />
                Ver qué hacemos
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
                <div className="text-2xl md:text-3xl font-bold text-white">90min</div>
                <div className="text-sm text-gray-400">Máximo</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">$35k</div>
                <div className="text-sm text-gray-400">Desde</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">1 vez</div>
                <div className="text-sm text-gray-400">Pagás</div>
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
                <MessageCircle className="w-6 h-6 text-green-400 mb-2" />
                <p className="text-white text-sm font-medium">WhatsApp</p>
                <p className="text-gray-400 text-xs">Respuesta real</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute top-32 -right-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <Clock className="w-6 h-6 text-blue-400 mb-2" />
                <p className="text-white text-sm font-medium">Agenda</p>
                <p className="text-gray-400 text-xs">Conectada</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
                className="absolute bottom-20 -left-8 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20"
              >
                <CheckCircle className="w-6 h-6 text-purple-400 mb-2" />
                <p className="text-white text-sm font-medium">Flujos</p>
                <p className="text-gray-400 text-xs">Automáticos</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
