import { Zap } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Zap className="w-6 h-6 text-orange-500" />
              <div className="text-xl font-bold">
                <span className="text-orange-500">JARO</span>
                <span className="text-white">LITIO</span>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Distribuidor oficial de JAROCELLS en España. Especialistas en
              baterías de litio de última generación para barcos, caravanas y
              aplicaciones industriales.
            </p>
            <p className="text-gray-400 text-sm">
              © 2024 JAROLITIO. Todos los derechos reservados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-300 hover:text-orange-500 transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="/products"
                  className="text-gray-300 hover:text-orange-500 transition-colors">
                  Productos
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-gray-300 hover:text-orange-500 transition-colors">
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-300 hover:text-orange-500 transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">
              Contacto
            </h3>
            <div className="space-y-2 text-gray-300">
              <p>📧 info@jarolitio.es</p>
              <p>📞 +34 900 123 456</p>
              <p>📍 España</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            Diseñado con ❤️ para la energía del futuro
          </p>
        </div>
      </div>
    </footer>
  );
}
