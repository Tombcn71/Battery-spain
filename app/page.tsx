import { FiClock, FiShoppingCart } from "react-icons/fi";
import BatteryPacks from "./BatteryPacks";
import BatteryFeatures from "./BatteryFeatures";
import Footer from "./Footer";
import Navbar from "./Navbar";
import DistribuidorOficial from "./DistribuidorOficial";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
<section className="relative min-h-screen flex items-center justify-center">
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
        "url(https://images.unsplash.com/photo-1670326457662-d981e6788945?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)",
    }}></div>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Hero Content */}
  <div className="relative z-10 text-center px-4 w-full">
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white text-balance">
        Baterías de Litio{" "}
        <span className="text-orange-500">de Última Generación</span>
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 text-white/90 text-pretty">
        Experimente la máxima libertad con las baterías LiFePO₄ más ligeras y potentes
        para su barco o autocaravana.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          Ver Productos
        </button>
      </div>
    </div>
  </div>
</section><DistribuidorOficial />


      {/* Battery Packs Section */}
      <BatteryPacks />
      {/* Battery Features Section */}
      <BatteryFeatures />
      {/* Footer */}
      <Footer />
    </div>
  );
}
