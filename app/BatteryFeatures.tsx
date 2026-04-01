import {
  Timer,
  RefreshCw,
  CirclePlus,
  BatteryMedium,
  ShieldCheck,
  Package,
} from "lucide-react";

export default function BatteryFeatures() {
  return (
    <section className="py-16 px-8 bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
        <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-lg">
          <Timer className="w-16 h-16 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-black mb-2">
            Cargue con rapidez
          </h3>
          <p className="text-gray-600">
            Ahorre tiempo: Recupere la energía total en pocas horas dependiendo
            de su cargador.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-lg">
          <RefreshCw className="w-16 h-16 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-black mb-2">
            Maximice la vida útil
          </h3>
          <p className="text-gray-600">
            Rinda más: Soporta +/- 2000 ciclos de carga completa. 5 veces más
            que el plomo.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-lg">
          <CirclePlus className="w-16 h-16 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-black mb-2">
            Active la máxima potencia
          </h3>
          <p className="text-gray-600">
            Empuje constante: Disfrute de una fuerza continua (Full Power) hasta
            el final.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-lg">
          <BatteryMedium className="w-16 h-16 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-black mb-2">
            Optimice su sistema
          </h3>
          <p className="text-gray-600">
            Configure a medida: Conexión en serie y en paralelo para cualquier
            instalación.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-lg">
          <ShieldCheck className="w-16 h-16 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-black mb-2">
            Asegure su inversión
          </h3>
          <p className="text-gray-600">
            Calidad duradera: Rendimiento impecable y sostenible para su equipo.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white/50 rounded-lg shadow-lg">
          <Package className="w-16 h-16 text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold text-black mb-2">
            Reduzca el peso
          </h3>
          <p className="text-gray-600">
            Aligere su carga: La JAROCELLS 12V120Ah pesa solo 12,6 kg.
          </p>
        </div>
      </div>
    </section>
  );
}
