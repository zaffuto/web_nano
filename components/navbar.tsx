"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Bot, Menu, X } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleDemoClick = () => {
    window.open("https://app.smarterbot.cl/dashboard", "_blank")
  }

  const handlePlanClick = () => {
    window.open("https://app.smarterbot.cl", "_blank")
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-4 md:px-6 py-4 backdrop-blur-sm border-b border-white/10 relative z-50"
    >
      <Link href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">BOLT Gerente AI</span>
      </Link>

      <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
        <NavLink href="#caracteristicas">Características</NavLink>
        <NavLink href="#como-funciona">Cómo Funciona</NavLink>
        <NavLink href="#planes">Planes</NavLink>
        <NavLink href="#contacto">Contacto</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <Button variant="ghost" className="text-white hover:text-purple-400" onClick={handleDemoClick}>
          Iniciar Sesión
        </Button>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white" onClick={handlePlanClick}>
          Comenzar Ahora
        </Button>
      </div>

      <Button variant="ghost" size="icon" className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </Button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-b border-white/10 md:hidden"
        >
          <div className="flex flex-col space-y-4 px-6 py-6">
            <NavLink href="#caracteristicas" mobile onClick={() => setIsMenuOpen(false)}>
              Características
            </NavLink>
            <NavLink href="#como-funciona" mobile onClick={() => setIsMenuOpen(false)}>
              Cómo Funciona
            </NavLink>
            <NavLink href="#planes" mobile onClick={() => setIsMenuOpen(false)}>
              Planes
            </NavLink>
            <NavLink href="#contacto" mobile onClick={() => setIsMenuOpen(false)}>
              Contacto
            </NavLink>
            <div className="flex flex-col space-y-3 pt-4 border-t border-white/10">
              <Button
                variant="ghost"
                className="text-white hover:text-purple-400 justify-start"
                onClick={handleDemoClick}
              >
                Iniciar Sesión
              </Button>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white justify-start" onClick={handlePlanClick}>
                Comenzar Ahora
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

function NavLink({
  href,
  children,
  mobile = false,
  onClick,
}: {
  href: string
  children: React.ReactNode
  mobile?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      className={`text-gray-300 hover:text-white transition-colors relative group ${mobile ? "text-left" : ""}`}
      onClick={onClick}
    >
      {children}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all group-hover:w-full" />
    </Link>
  )
}
