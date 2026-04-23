// src/blocks/Archive.ts (示例：你可以把这些放在一个文件夹里)
import type { Block } from 'payload'
import { ButtonBlock } from './button'

// 1. Hero 组件 (大图大标题)
export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'imagePosition',
      type: 'select',
      options: [
        { label: 'Background', value: 'background' },
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'right',
    },
    { name: 'heroImage', type: 'upload', relationTo: 'media' },
    {
      name: 'button',
      type: 'blocks',
      blocks: [ButtonBlock],
    },
  ],
}

// 2. Features 组件 (三/四列图标+文字)
export const FeaturesBlock: Block = {
  slug: 'features',
  fields: [
    { name: 'heading', type: 'text' },
    {
      name: 'cards',
      type: 'array',
      fields: [
        { name: 'icon', type: 'upload', relationTo: 'media' },
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },
  ],
}

// 3. CTA 组件 (底部的横条，引导联系我们)
export const CTABlock: Block = {
  slug: 'cta',
  fields: [
    { name: 'text', type: 'text', required: true },
    {
      name: 'button',
      type: 'blocks',
      blocks: [ButtonBlock],
    },
  ],
}

// 4. Text Banner 组件 (文字横幅)
export const TextBannerBlock: Block = {
  slug: 'textBanner',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'button',
      type: 'blocks',
      blocks: [ButtonBlock],
    },
  ],
}

// 5. Counter Section 组件 (数字统计展示)
export const CounterSectionBlock: Block = {
  slug: 'counterSection',
  interfaceName: 'CounterSectionBlock',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'numberTextBlocks',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'number', type: 'text', required: true },
        { name: 'text', type: 'text', required: false },
      ],
    },
  ],
}

// 6. FAQ Block (常见问题)
export const FAQBlock: Block = {
  slug: 'faq',
  interfaceName: 'FAQBlock',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    { name: 'image', type: 'upload', relationTo: 'media' },
    {
      name: 'accordion',
      type: 'array',
      minRows: 1,
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'content', type: 'textarea', required: true },
      ],
    },
  ],
}

// 7. Logo Section (客户/合作伙伴 Logo 展示)
export const LogoSectionBlock: Block = {
  slug: 'logoSection',
  interfaceName: 'LogoSectionBlock',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'images',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'image', type: 'upload', relationTo: 'media', required: true }],
    },
  ],
}

// 8. Masonry Block (瀑布流图片展示)
export const MasonryBlock: Block = {
  slug: 'masonry',
  interfaceName: 'MasonryBlock',
  fields: [
    { name: 'title', type: 'text', required: true },
    { name: 'subtitle', type: 'textarea' },
    {
      name: 'pictures',
      type: 'array',
      minRows: 1,
      fields: [{ name: 'picture', type: 'upload', relationTo: 'media', required: true }],
    },
  ],
}
