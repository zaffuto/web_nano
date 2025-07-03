"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"

export default function PricingSection() {
  const handlePlanClick = () => {
    window.open("https://app.smarterbot.cl", "_blank")
  }

  const handleDemoClick = () => {
    window.open("https://app.smarterbot.cl", "_blank")
  }

  const plans = [
    {
      name: "Plan Básico",
      subtitle: "Para pequeños negocios",
      price: "$49.000",
      period: "/mes",
      features: ["WhatsApp Business", "IA Básica", "Pagos con Mercado Pago", "50% descuento en actualización web"],
      popular: false,
    },
    {
      name: "Plan Profesional",
      subtitle: "Para negocios en crecimiento",
      price: "$99.000",
      period: "/mes",
      features: [
        "WhatsApp Business",
        "IA Avanzada",
        "Múltiples opciones de pago",
        "Automatizaciones N8N",
        "Actualización de sitio web",
      ],
      popular: true,
    },
    {
      name: "Plan Empresarial",
      subtitle: "Para grandes empresas",
      price: "$149.000",
      period: "/mes",
      features: [
        "WhatsApp Business API",
        "IA Premium Personalizada",
        "Integración completa de pagos",
        "Automatizaciones avanzadas",
        "Actualización de sitio web",
        "Soporte prioritario",
      ],
      popular: false,
    },
  ]

  return (
    <section id="planes" className="py-16 md:py-24 px-4 md:px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Planes y Precios</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full ${plan.popular ? "border-purple-500 border-2 scale-105" : "border-white/10"} bg-black/50 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Popular
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-white text-xl mb-1">{plan.name}</CardTitle>
                  <p className="text-gray-400 text-sm">{plan.subtitle}</p>

                  <div className="mt-4">
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 ${
                      plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                    onClick={handlePlanClick}
                  >
                    Seleccionar
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Comienza a automatizar tu negocio hoy</h3>
          <p className="text-gray-400 mb-6">Implementación en menos de 24 horas. Soporte personalizado.</p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-8" onClick={handleDemoClick}>
            Solicitar Demo
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
