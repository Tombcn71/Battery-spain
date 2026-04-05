import {
  Timer,
  RefreshCw,
  CirclePlus,
  BatteryMedium,
  ShieldCheck,
  Package,
  Battery,
} from "lucide-react";

export default function BatteryFeatures() {
  return (
    <section className="py-10 sm:py-16 px-4 sm:px-8 bg-white/80 backdrop-blur-md">
      {/* Why Lithium Batteries Header */}
      <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 mb-4">
          <Battery className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-balance">
            <span className="text-black">¿Por qué elegir </span>
            <span className="text-orange-500">baterías de litio</span>
            <span className="text-black">?</span>
          </h2>
        </div>
        <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-pretty">
          Las baterías de litio LiFePO4 representan la última evolución en almacenamiento de energía. 
          Son más ligeras, duraderas y eficientes que las baterías de plomo tradicionales, 
          ofreciendo un rendimiento superior para su barco, caravana o instalación solar.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center">
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 rounded-lg shadow-lg">
          <Timer className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
            Cargue con rapidez
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Ahorre tiempo: Recupere la energía total en pocas horas dependiendo
            de su cargador.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 rounded-lg shadow-lg">
          <RefreshCw className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
            Maximice la vida útil
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Rinda más: Soporta +/- 2000 ciclos de carga completa. 5 veces más
            que el plomo.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 rounded-lg shadow-lg">
          <CirclePlus className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
            Active la máxima potencia
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Empuje constante: Disfrute de una fuerza continua (Full Power) hasta
            el final.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 rounded-lg shadow-lg">
          <BatteryMedium className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
            Optimice su sistema
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Configure a medida: Conexión en serie y en paralelo para cualquier
            instalación.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 rounded-lg shadow-lg">
          <ShieldCheck className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
            Asegure su inversión
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Calidad duradera: Rendimiento impecable y sostenible para su equipo.
          </p>
        </div>
        <div className="flex flex-col items-center p-4 sm:p-6 bg-white/50 rounded-lg shadow-lg">
          <Package className="w-12 h-12 sm:w-16 sm:h-16 text-orange-500 mb-3 sm:mb-4" />
          <h3 className="text-lg sm:text-xl font-semibold text-black mb-2">
            Reduzca el peso
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Aligere su carga: La JAROCELLS 12V120Ah pesa solo 12,6 kg.
          </p>
        </div>
      </div>
    </section>
  );
}
