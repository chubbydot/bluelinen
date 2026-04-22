import type { CollectionConfig } from 'payload'
import { HeroBlock, FeaturesBlock, CTABlock } from './Blocks' // 导入上面定义的块

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
    create: () => true,
    update: () => true,
    delete: () => true,
  },
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      admin: { position: 'sidebar' },
    },
    {
      name: 'layout', // 关键：这是搭积木的地方
      type: 'blocks',
      blocks: [HeroBlock, FeaturesBlock, CTABlock],
    },
  ],
}
