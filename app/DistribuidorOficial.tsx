export default function DistribuidorOficial() {
  return (
    <section className="bg-white py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-orange-500 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            Distribuidor Oficial en España
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Somos el distribuidor oficial de{" "}
            <span className="text-orange-500">JAROCELLS</span> en España
          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Trabajamos directamente con el fabricante para ofrecerte las mejores
            baterías de litio LiFePO₄ con garantía oficial y soporte técnico en
            español.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Product Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-orange-500/10 rounded-3xl blur-3xl"></div>
            <img
              src="/BT100-36_web3.jpg"
              alt="JAROCELLS JARO-BT100.36 38.4V 100Ah"
              className="relative z-10 w-full max-w-md rounded-2xl object-contain drop-shadow-xl"
            />
          </div>

          {/* Features */}
          <div className="space-y-6">
            {[
              {
                icon: "🏆",
                title: "Distribuidor Oficial Certificado",
                desc: "Somos el distribuidor exclusivo de JAROCELLS en todo el territorio español, avalado directamente por el fabricante.",
              },
              {
                icon: "🔧",
                title: "Soporte Técnico en Español",
                desc: "Nuestro equipo técnico te acompaña antes, durante y después de tu compra. Hablamos tu idioma.",
              },
              {
                icon: "📦",
                title: "Stock en España",
                desc: "Entrega rápida desde nuestro almacén en España. Sin esperas de importación ni aduanas.",
              },
              {
                icon: "✅",
                title: "Garantía Oficial de 5 Años",
                desc: "Todas nuestras baterías incluyen la garantía oficial del fabricante gestionada directamente desde España.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="text-2xl bg-orange-50 rounded-xl p-3 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-black font-semibold text-base mb-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* CTA */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                Ver Productos JAROCELLS
              </button>
              <button className="border border-gray-300 hover:border-orange-500 text-black font-semibold py-3 px-6 rounded-lg transition-colors">
                Contactar con un experto
              </button>
            </div>
          </div>
        </div>

        {/* Bottom badge */}
        <div className="mt-14 border-t border-gray-200 pt-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm text-center">
          <span>🇪🇸 Distribuidor oficial para España</span>
          <span className="hidden sm:block">•</span>
          <span>⚡ Baterías LiFePO₄ certificadas CE</span>
          <span className="hidden sm:block">•</span>
          <span>🚢 Para barcos, yates y autocaravanas</span>
        </div>
      </div>
    </section>
  );
}