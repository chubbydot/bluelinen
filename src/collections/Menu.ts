import type { CollectionConfig } from 'payload'

export const Menu: CollectionConfig = {
  slug: 'menu',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    // 关键：必须允许所有人（包括 Astro 服务端）读取，否则 fetch 会报 403
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      fields: [
        {
          type: 'row',
          fields: [
            { name: 'label', type: 'text', required: true },
            { name: 'url', type: 'text', required: false },
          ],
        },
        // 第二层
        {
          name: 'children',
          type: 'array',
          fields: [
            {
              type: 'row',
              fields: [
                { name: 'label', type: 'text', required: true },
                { name: 'url', type: 'text', required: false },
              ],
            },
            // 第三层
            {
              name: 'subChildren',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    { name: 'label', type: 'text', required: true },
                    { name: 'url', type: 'text', required: false },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
