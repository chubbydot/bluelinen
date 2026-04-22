import type { CollectionConfig, Block } from 'payload'
import { HeroBlock, FeaturesBlock, CTABlock, TextBannerBlock } from './Blocks' // 导入上面定义的块

// 创建一个包装块，包含背景颜色开关和子块
export const LayoutSectionBlock: Block = {
  slug: 'layoutSection',
  fields: [
    {
      name: 'enableBackground',
      type: 'checkbox',
      label: 'Enable Background Color',
      defaultValue: false,
    },
    {
      name: 'content',
      type: 'blocks',
      blocks: [HeroBlock, FeaturesBlock, CTABlock, TextBannerBlock],
    },
  ],
}

export const Pages: CollectionConfig = {
  slug: 'pages',
  access: {
    read: () => true,
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
      name: 'section', // 关键：这是搭积木的地方
      type: 'blocks',
      blocks: [LayoutSectionBlock],
    },
  ],
}
