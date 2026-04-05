import { Zap, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold tracking-tight">
                <span className="text-orange-500">JARO</span>
                <span className="text-white">LITIO</span>
              </div>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Distribuidor oficial de JAROCELLS en España. Especialistas en
              baterías de litio LiFePO₄ de última generación para náutica,
              caravanas y aplicaciones industriales.
            </p>
            {/* Social Media */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Productos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  Baterías de Litio
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  Baterías Náuticas
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  Baterías Caravanas
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  Accesorios
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Enlaces
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">
              Contacto
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <a
                  href="mailto:info@jarolitio.es"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  info@jarolitio.es
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <a
                  href="tel:+34900123456"
                  className="text-slate-400 hover:text-orange-500 transition-colors"
                >
                  +34 900 123 456
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
                <span className="text-slate-400">
                  España
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {currentYear} JAROLITIO. Todos los derechos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-slate-500 hover:text-orange-500 transition-colors"
              >
                Política de Privacidad
              </Link>
              <Link
                href="/terms"
                className="text-slate-500 hover:text-orange-500 transition-colors"
              >
                Términos y Condiciones
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
