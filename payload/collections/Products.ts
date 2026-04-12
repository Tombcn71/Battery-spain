import type { CollectionConfig } from 'payload'

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true, label: 'Nombre del Producto' },
    { name: 'description', type: 'textarea', label: 'Descripcion' },
    { name: 'price', type: 'number', required: true, label: 'Precio' },
    { name: 'image', type: 'upload', relationTo: 'media', label: 'Imagen' },
    { name: 'category', type: 'relationship', relationTo: 'categories', label: 'Categoria' },
  ],
}

export default Products
