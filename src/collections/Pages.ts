import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    preview: (doc) => {
      return doc?.enabled ? `http://localhost:3000/${doc.slug}` : null
    },
  },
  fields: [
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'enabled',
      type: 'checkbox',
    },
  ],
}
