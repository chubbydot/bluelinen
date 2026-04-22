import type { CollectionConfig } from 'payload'

export const Blocks: CollectionConfig = {
  slug: 'blocks',
  access: {
    read: () => true,
  },
  //   admin: {
  //     useAsTitle: 'email',
  //   },
  auth: true,
  fields: [
    // {
    //   name: 'slug',
    //   type: 'text',
    // },
  ],
}
