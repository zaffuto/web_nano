"use client"

import { motion } from "framer-motion"
import { Bot, MessageSquare, CreditCard, Shield, FileSpreadsheet, Zap } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: Bot,
      title: "Chatbot preconfigurado",
      description: "Bot inteligente listo para usar que maneja tus ventas automáticamente",
    },
    {
      icon: MessageSquare,
      title: "TUS Ventas y Pedidos",
      description: "TU canal principal: tus clientes interactúan por WhatsApp Business",
    },
    {
      icon: CreditCard,
      title: "TU Facturación automática",
      description: "Consumo mensual fijo, pago con tarjeta en Mercado Pago",
    },
    {
      icon: Shield,
      title: "Autenticación 24x7",
      description: "Google y Facebook acceso simple. Seguridad garantizada todo el tiempo",
    },
    {
      icon: FileSpreadsheet,
      title: "Inventario con Excel o Sheet",
      description: "Gestiona TU inventario directamente desde Excel o Google Sheets",
    },
    {
      icon: Zap,
      title: "TUS Tarjetas y contenido V0",
      description: "Plantillas de contenido dinámico para TU landing, e-mail y chat",
    },
  ]

  return (
    <section id="como-funciona" className="py-12 md:py-20 px-4 md:px-6 bg-black/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Cómo funciona TU negocio con BOLT
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-4 md:p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-purple-500 mb-3 md:mb-4" />
              <h3 className="text-white text-lg md:text-xl font-semibold mb-2 md:mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
