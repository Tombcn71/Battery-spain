import { FiClock, FiShoppingCart } from "react-icons/fi";
import BatteryPacks from "./BatteryPacks";
import BatteryFeatures from "./BatteryFeatures";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] md:min-h-[80vh] flex items-center justify-center pt-20 pb-8">
        {/* Background Images */}
        <div
          className="absolute inset-0 bg-cover bg-center slideshow"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1593351415075-3bac9f45c877?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Ym9hdHxlbnwwfHwwfHx8MA%3D%3D)",
          }}></div>
        <div
          className="absolute inset-0 bg-cover bg-center slideshow-delay"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
          }}></div>
        {/* Overlay for better text readability on mobile */}
        <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>
        
        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 w-full">
          <div className="bg-white/70 md:bg-white/50 backdrop-blur-md p-6 md:p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">
              <span className="text-black">Baterías de Litio</span>{" "}
              <span className="text-orange-500">de Última Generación</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-gray-700 text-pretty">
              Distribuidor oficial de JAROCELLS en España. Experimente la
              máxima libertad con las baterías LiFePO₄ más ligeras y potentes
              para su barco o autocaravana.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Ver Productos
              </button>
              <button className="bg-transparent border-2 border-orange-500 text-orange-500 font-bold py-3 px-6 rounded-lg hover:bg-orange-500 hover:text-white transition-colors">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-8 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FiClock className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl  text-orange-500 font-semibold mb-2">
              Entregas Rápidas
            </h3>
            <p className="text-gray-600">
              Entrega rápida y eficiente a toda España.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <FiShoppingCart className="w-12 h-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-semibold  text-orange-500 mb-2">
              Pagos Seguros
            </h3>
            <p className="text-gray-600">Pagos seguros con encriptación SSL.</p>
          </div>
          <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-12 h-12 text-orange-500 mb-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.623 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
              />
            </svg>
            <h3 className="text-xl font-semibold  text-orange-500 mb-2">
              5 Años de Garantía
            </h3>
            <p className="text-gray-600">
              Garantía de 5 años en todos nuestros productos.
            </p>
          </div>
        </div>
      </section>
      {/* Battery Packs Section */}
      <BatteryPacks />
      {/* Battery Features Section */}
      <BatteryFeatures />
      {/* Footer */}
      <Footer />
    </div>
  );
}
