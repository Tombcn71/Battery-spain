"use client";

import { useState } from "react";
import { Zap, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-md">
      <nav className="flex justify-between items-center p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-7 h-7 sm:w-9 sm:h-9 bg-orange-500 rounded-lg flex items-center justify-center shrink-0">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white fill-current" />
          </div>

          <div className="flex flex-col">
            {/* Hoofdtekst */}
            <div className="text-lg sm:text-2xl font-black tracking-tighter leading-none">
              <span className="text-orange-500">ENERGIA</span>
              <span className="text-black uppercase">LITIO</span>
            </div>

            {/* Tagline */}
            <span className="text-[8px] sm:text-[10px] text-black font-bold tracking-[0.14em] sm:tracking-[0.24em] uppercase leading-none mt-1 whitespace-nowrap">
              energia sin limites
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-6">
          <li>
            <Link
              href="/"
              className="text-black hover:text-orange-500 transition-colors font-medium">
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-black hover:text-orange-500 transition-colors font-medium">
              Productos
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-black hover:text-orange-500 transition-colors font-medium">
              Contacto
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition-colors">
              Ver Productos
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-black hover:text-orange-500 transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <ul className="flex flex-col p-4 gap-4">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block text-black hover:text-orange-500 transition-colors font-medium py-2">
                Inicio
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="block text-black hover:text-orange-500 transition-colors font-medium py-2">
                Productos
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block text-black hover:text-orange-500 transition-colors font-medium py-2">
                Contacto
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/products"
                onClick={() => setIsOpen(false)}
                className="block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-4 rounded-lg text-center transition-colors">
                Ver Productos
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
