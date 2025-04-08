import type { CollectionConfig } from 'payload'

export const Articles: CollectionConfig = {
  slug: 'articles',
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
      name: 'slug',
      type: 'text',
      minLength: 5,
      maxLength: 100,
      admin: {
        description: 'Lowercase letters, numbers and dashes only.',
      },
      required: true,
    },
    {
      name: 'metatitle',
      label: 'Meta title',
      type: 'text',
      minLength: 50,
      maxLength: 65,
      admin: {
        description: 'Between 50 and 65 characters',
      },
      required: true,
    },
    {
      name: 'excerpt',
      label: 'Excerpt',
      type: 'textarea',
      minLength: 100,
      maxLength: 160,
      admin: {
        description: 'Shows on the page with all articles. 100 - 160 characters.',
      },
      required: true,
    },
    {
      name: 'metadescription',
      label: 'Meta description',
      type: 'textarea',
      minLength: 70,
      maxLength: 155,
      admin: {
        description: 'Between 70 and 155 characters',
      },
      required: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
      admin: {
        description: 'PNG format, exactly 1,200 by 630px',
      },
      required: true,
    },
    {
      name: 'includeInFooter',
      label: 'Include in footer',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'content',
      type: 'richText',
      required: true,
    },
  ],
}
