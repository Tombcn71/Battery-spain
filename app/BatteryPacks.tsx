export default function BatteryPacks() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-green-50 px-4 py-8 sm:p-8">
      <div className="max-w-7xl mx-auto bg-white/90 backdrop-blur-lg p-5 sm:p-8 md:p-10 rounded-xl sm:rounded-2xl shadow-xl sm:shadow-2xl text-slate-900">
        {/* Sectie 1: Packs de Baterías */}
        <section className="mb-10 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-center text-orange-600 text-balance">
            Packs de Baterías: Potencia ligera con tecnología inteligente
          </h1>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Las baterías de litio de JAROCELLS parecen, a primera vista,
            baterías de plomo tradicionales, y esa es precisamente la intención.
            Tienen exactamente las mismas dimensiones, lo que permite
            sustituirlas de forma sencilla (Plug & Play). Pero no se equivoque:
            por dentro, todo es diferente.
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Nuestras baterías están fabricadas con tecnología de ferrofosfato de
            litio (LiFePO₄), lo que garantiza una densidad de energía y un
            rendimiento sin precedentes. En la misma carcasa compacta, obtendrá
            hasta el doble de energía utilizable que en una batería de plomo
            comparable. Esto se debe a que nuestras baterías de litio
            hierro-fosfato pueden rendir a plena potencia desde que están llenas
            hasta que se vacían por completo. Y eso es algo que notará
            inmediatamente durante su uso.
          </p>
          <div className="bg-orange-100 border-l-4 border-orange-500 p-4 sm:p-6 rounded-r-lg mb-6 sm:mb-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
              Tome como ejemplo la JARO-BT120.12:
            </h3>
            <ul className="list-disc list-inside text-base sm:text-lg space-y-2">
              <li>12V - 120Ah: pesa solo 12,6 kg.</li>
              <li>
                Rendimiento: comparable al de una batería de plomo AGM de
                aproximadamente 240Ah, que fácilmente supera los 55 kg.
              </li>
            </ul>
          </div>
        </section>

        {/* Sectie 2: Carga rápida y larga vida útil */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8 text-orange-600">
            Carga rápida y larga vida útil
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
            Nuestras baterías se cargan a una velocidad excepcional, sin
            necesidad de carga de mantenimiento o goteo. La carga se realiza
            siempre a máxima velocidad desde el primer momento. Incluso si no
            utiliza la batería durante un largo periodo de tiempo, esta se
            mantiene en óptimas condiciones, lo que la hace ideal para el uso
            estacional en barcos o caravanas.
          </p>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            Gracias a su avanzada electrónica integrada, cada batería JAROCELLS
            está protegida contra:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg mb-6 sm:mb-8 ml-3 sm:ml-6 space-y-1">
            <li>Sobrecarga</li>
            <li>Descarga profunda</li>
            <li>Cortocircuito</li>
            <li>Sobrecarga de corriente</li>
          </ul>
          <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
            Además, cada batería incluye de serie una conexión Bluetooth. A
            través de la aplicación gratuita JAROCELLS App en su smartphone,
            podrá consultar información en tiempo real como:
          </p>
          <ul className="list-disc list-inside text-base sm:text-lg mb-6 sm:mb-8 ml-3 sm:ml-6 space-y-1">
            <li>Estado de carga actual</li>
            <li>Consumo energético</li>
            <li>Velocidad de carga</li>
            <li>Número de ciclos de carga realizados</li>
          </ul>
        </section>

        {/* Sectie 3: Durabilidad y fiabilidad */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8 text-orange-600">
            Durabilidad y fiabilidad
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Las baterías JAROCELLS tienen una vida útil extremadamente larga.
            Pueden descargarse más de 2.000 veces sin una pérdida significativa
            de capacidad. Esto es de 4 a 5 veces más que una batería de plomo, e
            incluso el doble que muchas otras baterías de litio que no utilizan
            tecnología LiFePO₄.
          </p>
        </section>

        {/* Sectie 4: La elección inteligente para el futuro */}
        <section className="mb-10 sm:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-8 text-orange-600">
            La elección inteligente para el futuro
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Una batería de litio de JAROCELLS no es solo más ligera, potente e
            inteligente; es, sobre todo, una inversión sostenible. Para quienes
            buscan fiabilidad, comodidad y un rendimiento duradero, no existe
            una alternativa mejor.
          </p>
        </section>

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Packs de Baterías JAROCELLS LiFePO₄",
              description:
                "Baterías de litio ferrofosfato para barcos y caravanas con tecnología avanzada, carga rápida y larga vida útil.",
              brand: {
                "@type": "Brand",
                name: "JAROCELLS",
              },
              offers: {
                "@type": "Offer",
                priceCurrency: "EUR",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "Battery Spain",
                },
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
                  value: "Más de 2000 ciclos",
                },
                {
                  "@type": "PropertyValue",
                  name: "Conexión",
                  value: "Bluetooth incluido",
                },
                {
                  "@type": "PropertyValue",
                  name: "Protecciones",
                  value: "Sobrecarga, descarga profunda, cortocircuito",
                },
              ],
              applicationCategory: "Baterías para barcos y caravanas",
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
                  name: "¿Qué hace únicas a las baterías JAROCELLS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Utilizan tecnología LiFePO₄ para mayor energía, carga rápida y vida útil de más de 2000 ciclos, con protección avanzada y Bluetooth.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Son compatibles con baterías de plomo tradicionales?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Sí, tienen las mismas dimensiones para sustitución Plug & Play.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo se cargan las baterías JAROCELLS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Se cargan a máxima velocidad sin mantenimiento, ideales para uso estacional.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué protecciones incluyen?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Protección contra sobrecarga, descarga profunda, cortocircuito y sobrecarga de corriente.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuánto duran las baterías JAROCELLS?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Más de 2000 ciclos de descarga, 4-5 veces más que baterías de plomo.",
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
