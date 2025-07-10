"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Smartphone, Clock, Wrench, Bot } from "lucide-react"

export default function ServicesSection() {
  const handleContactClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=56979540471", "_blank")
  }

  const services = [
    {
      icon: Wrench,
      title: "Conectamos tus herramientas",
      description: "Tu formulario se conecta con tu email y tu planilla. Automático.",
      example: "Ejemplo: Google Forms → Gmail → Sheets",
      price: "$35.000",
      time: "90 minutos",
    },
    {
      icon: Calendar,
      title: "Agenda que funciona",
      description: "Link para agendar + confirmación por WhatsApp. Sin bots, respuesta real.",
      example: "Ejemplo: Calendly + WhatsApp manual",
      price: "$35.000",
      time: "90 minutos",
    },
    {
      icon: Smartphone,
      title: "App para tu negocio",
      description: "App simple para inventario, clientes o pedidos. Se instala directo en el teléfono.",
      example: "Ejemplo: App de inventario con Google Sheets",
      price: "$45.000",
      time: "2-3 horas",
    },
    {
      icon: Bot,
      title: "Asistente por WhatsApp",
      description: "Alguien real responde por vos. Agenda, consultas, seguimiento.",
      example: "Ejemplo: Secretaria virtual por WhatsApp",
      price: "$60.000",
      time: "por semana",
    },
    {
      icon: Clock,
      title: "Te ayudamos por hora",
      description: "¿Ya tenés algo armado? Te ayudamos a mejorarlo o escalarlo.",
      example: "Ejemplo: Revisar tu automatización actual",
      price: "$35.000",
      time: "por hora",
    },
  ]

  return (
    <section id="servicios" className="py-12 md:py-20 px-4 md:px-6 bg-black/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">¿Qué hacemos?</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Soluciones puntuales. Pagás una vez y listo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:border-green-500/50 transition-colors group"
            >
              <service.icon className="w-12 h-12 text-green-500 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-white text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm mb-3">{service.description}</p>
              <p className="text-green-400 text-xs italic mb-4">{service.example}</p>

              <div className="flex justify-between items-center mb-4">
                <div className="text-white font-bold text-lg">{service.price}</div>
                <div className="text-gray-400 text-sm">{service.time}</div>
              </div>

              <Button className="w-full bg-green-600 hover:bg-green-700 text-white" onClick={handleContactClick}>
                Contratar ahora
              </Button>
            </motion.div>
          ))}
        </div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">¿Cómo trabajamos?</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">1</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Nos contás</h4>
              <p className="text-gray-400 text-sm">Qué querés conectar o automatizar</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">2</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Te cotizamos</h4>
              <p className="text-gray-400 text-sm">Precio fijo, sin sorpresas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">3</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Lo hacemos</h4>
              <p className="text-gray-400 text-sm">En máximo 90 minutos</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 font-bold">4</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Te entregamos</h4>
              <p className="text-gray-400 text-sm">Todo funcionando + explicación</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
