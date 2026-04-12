import type { CollectionConfig } from 'payload'

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    disableLocalStorage: true,
  },
  fields: [
    { name: 'alt', type: 'text', label: 'Texto Alternativo' },
  ],
}

export default Media
