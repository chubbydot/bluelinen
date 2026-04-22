import type { Block } from 'payload'

export const ButtonBlock: Block = {
  slug: 'button',
  interfaceName: 'ButtonBlock',
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
      label: 'Button Label',
    },
    {
      name: 'icon',
      type: 'upload',
      relationTo: 'media',
      label: 'Icon',
    },
    {
      name: 'iconPosition',
      type: 'select',
      options: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
      ],
      defaultValue: 'left',
    },
    {
      name: 'link',
      type: 'text',
      required: true,
      label: 'Link URL',
    },
    {
      name: 'variant',
      type: 'select',
      options: [
        { label: 'Primary', value: 'primary' },
        { label: 'Secondary', value: 'secondary' },
        { label: 'Outline', value: 'outline' },
        { label: 'Ghost', value: 'ghost' },
      ],
      defaultValue: 'primary',
    },
    {
      name: 'size',
      type: 'select',
      options: [
        { label: 'Small', value: 'small' },
        { label: 'Medium', value: 'medium' },
        { label: 'Large', value: 'large' },
      ],
      defaultValue: 'medium',
    },
    {
      name: 'newTab',
      type: 'checkbox',
      label: 'Open in new tab',
    },
  ],
}
