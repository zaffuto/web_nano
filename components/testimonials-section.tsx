"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Pedro me conectó WhatsApp con calendario y agenda Google en 90 minutos. Nada de bots, todo real.",
      author: "Cliente de Santiago",
      location: "Chile",
      service: "Calendario + WhatsApp",
    },
    {
      text: "Ahora mis leads entran solos a mi Drive y se ordenan por fecha sin que yo toque nada.",
      author: "Profesional freelance",
      location: "Chile",
      service: "Automatización",
    },
    {
      text: "Agendamos 7 reuniones en 3 días con el flujo nuevo de WhatsApp + calendario, sin bot.",
      author: "Empresa de servicios",
      location: "Santiago",
      service: "Sistema de agenda",
    },
    {
      text: "Unimos AppSheet + Google Sheets + PDF automático y lo subimos al teléfono como app interna.",
      author: "Pyme industrial",
      location: "Chile",
      service: "App móvil",
    },
    {
      text: "Cliente en España vende cursos y ahora todo le llega a su Drive sin hacer nada.",
      author: "Vendedor de cursos",
      location: "España",
      service: "Automatización de ventas",
    },
  ]

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-black/10">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Casos reales</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Historias de España y Chile. Resultados reales sin humo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-colors"
            >
              <div className="flex items-start mb-4">
                <Quote className="w-6 h-6 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 text-sm md:text-base mb-4 leading-relaxed">"{testimonial.text}"</p>

              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-medium text-sm">{testimonial.author}</p>
                <p className="text-gray-400 text-xs">{testimonial.location}</p>
                <div className="mt-2">
                  <span className="inline-block bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full text-xs">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-xl p-8 border border-purple-500/20"
        >
          <h3 className="text-2xl font-bold text-white mb-4">¿Qué hacemos en SmarterBot?</h3>
          <p className="text-gray-300 text-lg mb-2">
            SmarterBot no es un software. Es un sistema humano + tecnológico.
          </p>
          <p className="text-gray-400 mb-6">Resolvemos lo que te frustra. Lo conectamos. Lo automatizamos.</p>
          <p className="text-purple-300 font-medium">Y lo hacemos con herramientas reales que ya existen.</p>
        </motion.div>
      </div>
    </section>
  )
}
