import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const payload = await getPayload({ config })
  
  const { docs } = await payload.find({
    collection: 'products',
    where: { id: { equals: Number(id) } },
    depth: 2,
  })

  const product = docs[0] as any
  if (!product) return notFound()

  const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || ''

  return (
    <div className="min-h-screen bg-white text-black py-16 px-8 max-w-4xl mx-auto">
      {product.image?.url && (
        <img
          src={`${serverUrl}${product.image.url}`}
          alt={product.image.alt || product.name}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      )}
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p className="text-gray-600 text-lg mb-4">{product.description}</p>
      <p className="text-orange-500 text-3xl font-bold mb-8">€{product.price}</p>
      <button className="bg-orange-500 text-white py-3 px-8 rounded-lg text-lg">
        Comprar
      </button>
    </div>
  )
}
