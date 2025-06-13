"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      {/* Top Banner */}
      <div className="bg-red-600 text-white py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="text-sm font-medium">
            LOCAÇÃO A PARTIR DE R$1200 • EQUIPAMENTOS DE ULTRASSOM LOCAÇÃO A PARTIR DE R$1200 • EQUIPAMENTOS DE
            ULTRASSOM LOCAÇÃO A PARTIR DE R$1200 • EQUIPAMENTOS DE ULTRASSOM
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-gray-700/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="flex items-center justify-center">
                <Image src="/logo.png" alt="UltrassomCenter" width={200} height={60} className="w-48 h-20" />
              </div>
            
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/" className="text-white hover:text-red-400 transition-colors font-medium">
                Início
              </Link>
              <Link href="/empresa" className="text-white hover:text-red-400 transition-colors font-medium">
                Empresa
              </Link>
              <Link href="/assistencia-tecnica" className="text-white hover:text-red-400 transition-colors font-medium">
                Assistência Técnica
              </Link>
            
              <Link href="/locacao" className="text-white hover:text-red-400 transition-colors font-medium">
                Locação
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a 
                href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6">Fale Conosco</Button>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-600">
              <nav className="flex flex-col gap-4">
                <Link
                  href="/"
                  className="text-white hover:text-red-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </Link>
                <Link
                  href="/empresa"
                  className="text-white hover:text-red-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Empresa
                </Link>
                <Link
                  href="/assistencia-tecnica"
                  className="text-white hover:text-red-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Assistência Técnica
                </Link>
                <Link
                  href="/contato"
                  className="text-white hover:text-red-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contato
                </Link>
                <Link
                  href="/locacao"
                  className="text-white hover:text-red-400 transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Locação
                </Link>
                <a 
                  href="https://api.whatsapp.com/send/?phone=%2B5511917433834&text=Ol%C3%A1%2C+vim+do+site+e+gostaria+de+saber+mais+sobre+a+ultrassom.+&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-green-500 hover:bg-green-600 text-white font-medium w-fit">Fale Conosco</Button>
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  )
}
