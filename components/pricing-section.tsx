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
      name: "KVM 2",
      originalPrice: "$40.000",
      price: "$19.900",
      renewalPrice: "$29.900",
      period: "/mes",
      discount: "AHORRA 50%",
      description: "En planes de 24 meses; IVA no incluido",
      features: [
        "1 Chatbot preconfigurado",
        "Inventario básico Excel/Sheet",
        "20 tarjetas V0",
        "Soporte por correo electrónico",
        "Autenticación Google/Facebook",
      ],
      popular: false,
    },
    {
      name: "KVM 4",
      originalPrice: "$60.000",
      price: "$29.900",
      renewalPrice: "$49.900",
      period: "/mes",
      discount: "AHORRA 50%",
      description: "En planes de 24 meses; IVA no incluido",
      features: [
        "3 Chatbots para TUS áreas",
        "Inventario avanzado con sincronización",
        "50 tarjetas V0 personalizadas",
        "Soporte por chat 24/7",
        "Autenticación 24x7 completa",
        "Integración WhatsApp Business",
      ],
      popular: true,
    },
    {
      name: "KVM 8",
      originalPrice: "$120.000",
      price: "$59.900",
      renewalPrice: "$99.900",
      period: "/mes",
      discount: "AHORRA 50%",
      description: "En planes de 24 meses; IVA no incluido",
      features: [
        "Chatbots ilimitados",
        "Inventario empresarial ilimitado",
        "Tarjetas V0 ilimitadas",
        "Soporte dedicado",
        "API personalizada",
        "Integración completa Google/Facebook",
      ],
      popular: false,
    },
  ]

  return (
    <section id="planes" className="py-12 md:py-20 px-4 md:px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">TUS Planes y Precios</h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto px-4">
            Consumo fijo: sin sorpresas para TI. Sólo una suscripción plana por mes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className={`relative h-full ${plan.popular ? "border-purple-500 border-2" : "border-white/10"} bg-black/50 backdrop-blur-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Recomendado para TI
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-6 md:pb-8">
                  <CardTitle className="text-white text-xl md:text-2xl mb-2">{plan.name}</CardTitle>

                  <div className="mb-4">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <span className="text-gray-400 line-through text-base md:text-lg">{plan.originalPrice}</span>
                      <span className="bg-green-500 text-white px-2 py-1 rounded text-xs md:text-sm font-bold">
                        {plan.discount}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-center">
                      <span className="text-3xl md:text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-400 mt-2 px-2">{plan.description}</p>
                    <p className="text-xs text-gray-500 mt-1 px-2">
                      Se renueva a {plan.renewalPrice}/mes después de 2 años.
                    </p>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-5 h-5 text-purple-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full mt-6 md:mt-8 ${
                      plan.popular ? "bg-purple-600 hover:bg-purple-700" : "bg-white/10 hover:bg-white/20 text-white"
                    }`}
                    onClick={handlePlanClick}
                  >
                    Elegir Plan
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
          className="text-center mt-8 md:mt-12 px-4"
        >
          <p className="text-gray-400 mb-6">
            ¿No estás seguro? Prueba TU demo gratis y descubre cómo BOLT puede transformar TU negocio.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="text-white border-purple-500 hover:bg-purple-500/20 bg-transparent w-full sm:w-auto"
            onClick={handleDemoClick}
          >
            Demo Gratis
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
