import type { CollectionConfig } from 'payload'
import { MenuBlock } from './Menu'
import { ButtonBlock } from './button'

export const Navigation: CollectionConfig = {
  slug: 'navigation',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'menu',
      type: 'blocks',
      blocks: [MenuBlock],
      label: 'Menu',
    },
    {
      name: 'cta',
      type: 'blocks',
      blocks: [ButtonBlock],
    },
  ],
}
