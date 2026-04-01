export default function Products() {
  // TODO: Fetch products from Payload API
  return (
    <div className="min-h-screen bg-white text-black py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Nuestros Productos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Placeholder for product cards */}
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-semibold">Batería de Litio 12V</h2>
          <p>Descripción del producto.</p>
          <button className="bg-orange-500 text-white py-2 px-4 rounded mt-4">
            Comprar
          </button>
        </div>
        {/* Add more */}
      </div>
    </div>
  );
}
