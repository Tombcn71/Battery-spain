import { getPayload } from 'payload'
import config from '@payload-config'
import Link from 'next/link'

export const revalidate = 0

export default async function Products() {
  const payload = await getPayload({ config })
  const { docs: products } = await payload.find({
    collection: 'products',
    depth: 2,
  })

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || ''

  return (
    <div className="min-h-screen bg-white text-black py-16 px-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Nuestros Productos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {(products as any[]).map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            <div className="bg-gray-100 p-6 rounded-lg hover:shadow-lg transition cursor-pointer">
              {product.image?.url && (
                <img
                  src={product.image.url.startsWith('http') ? product.image.url : `${serverUrl}${product.image.url}`}
                  alt={product.image.alt || product.name}
                  className="w-full h-48 object-cover rounded mb-4"
                />
              )}
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-orange-500 font-bold mt-2">€{product.price}</p>
            </div>
          </Link>
        ))}
        {products.length === 0 && (
          <p className="text-gray-500">No hay productos todavía.</p>
        )}
      </div>
    </div>
  )
}
