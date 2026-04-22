import type { Block } from 'payload'

export const MenuBlock: Block = {
  slug: 'menu',
  interfaceName: 'MenuBlock',
  fields: [
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
