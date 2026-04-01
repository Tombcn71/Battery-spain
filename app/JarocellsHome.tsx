import {
  FiZap,
  FiClock,
  FiTrendingUp,
  FiSettings,
  FiDollarSign,
  FiFeather,
} from "react-icons/fi";

export default function JarocellsHome() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-lg p-10 rounded-2xl shadow-2xl text-slate-900">
        {/* Sectie 1: De Vergelijking & Technologie */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-8 text-center">
            JAROCELLS: Potencia ligera con tecnología inteligente
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Las baterías de litio de JAROCELLS parecen tradicionales por fuera,
            pero por dentro todo es diferente. Tienen exactamente las mismas
            dimensiones para una sustitución sencilla (Plug & Play), pero están
            construidas con tecnología LiFePO₄ (Ferrofosfato de Litio). Esto
            garantiza un contenido de energía y un rendimiento sin precedentes.
            En la misma carcasa compacta, obtendrá hasta el doble de energía
            utilizable que en una batería de plomo, manteniendo la máxima
            potencia de principio a fin del uso.
          </p>
          <div className="bg-orange-100 border-l-4 border-orange-500 p-6 rounded-r-lg">
            <p className="text-lg font-semibold">
              Ejemplo real: La JARO-BT120.12 (12V – 120Ah) pesa solo 12,6 kg,
              rindiendo lo mismo que una batería de plomo AGM de 240Ah que
              supera los 55 kg.
            </p>
          </div>
        </section>

        {/* Sectie 2: Waarom een Lithium accu? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            ¿Por qué una batería de litio?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <FiZap className="w-16 h-16 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Snel opladen</h3>
              <p>
                Dependiendo del cargador, su batería estará lista en pocas
                horas. No necesita carga de goteo; siempre carga a máxima
                velocidad.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FiClock className="w-16 h-16 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Lange levensduur</h3>
              <p>
                Soporta +/- 2000 ciclos de carga. Dura hasta 5 veces más que una
                batería de plomo convencional y el doble que otras tecnologías
                de litio.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FiTrendingUp className="w-16 h-16 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Full Power</h3>
              <p>
                Empuje continuo (stuwkracht). La fuerza no disminuye a medida
                que la batería se descarga; rinde al 100% hasta que está vacía.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FiSettings className="w-16 h-16 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Vermogen & Schakelbaar
              </h3>
              <p>
                Diseño inteligente que permite la conexión en serie y en
                paralelo para adaptarse perfectamente a las necesidades de su
                barco o camper.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FiDollarSign className="w-16 h-16 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">
                Aanschaf & Investering
              </h3>
              <p>
                Una larga vida útil con rendimiento constante garantizado. Es la
                inversión más inteligente y rentable para el futuro de su
                equipo.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FiFeather className="w-16 h-16 text-orange-500 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Gewicht</h3>
              <p>
                La JAROCELLS 12V120Ah de 1,5kWh pesa solo 12,6 kg. Potencia
                máxima sin el esfuerzo del peso pesado tradicional.
              </p>
            </div>
          </div>
        </section>

        {/* Sectie 3: Slimme Technologie & Veiligheid */}
        <section className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-center">
            Seguridad Avanzada y Control Bluetooth
          </h3>
          <p className="text-lg leading-relaxed">
            Gracias a la electrónica avanzada y el sistema BMS (Battery
            Management System) integrado, cada batería JAROCELLS está protegida
            contra sobrecargas, descargas profundas y cortocircuitos. Además,
            incluye conexión Bluetooth de serie. A través de la App gratuita de
            JAROCELLS, podrá monitorizar en tiempo real el estado de carga, el
            consumo y los ciclos de vida desde su smartphone.
          </p>
        </section>

        {/* Sectie 4: Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Baterías de Litio JAROCELLS",
              description:
                "Baterías de litio LiFePO₄ para barcos y campers con tecnología avanzada.",
              brand: {
                "@type": "Brand",
                name: "JAROCELLS",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
              },
              additionalProperty: [
                {
                  "@type": "PropertyValue",
                  name: "Tecnología",
                  value: "LiFePO₄",
                },
                {
                  "@type": "PropertyValue",
                  name: "Ciclos de Vida",
                  value: "2000 ciclos",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Por qué elegir baterías de litio para barcos en España?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Las baterías de litio ofrecen mayor energía, menor peso y mayor durabilidad, ideales para la navegación en España.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuáles son las ventajas de las baterías LiFePO₄ para campers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Mayor capacidad, carga rápida y seguridad avanzada hacen que sean perfectas para viajes en camper.",
                  },
                },
              ],
            }),
          }}
        />
      </div>
    </div>
  );
}
