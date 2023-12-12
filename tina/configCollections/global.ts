export const global = {
  label: 'Global',
  name: 'global',
  path: 'content/global',
  format: 'json',
  ui: {
    global: true,
  },
  fields: [
    {
      type: 'object',
      label: 'Top Navigation',
      name: 'topNav',
      list: true,
      ui: {
        itemProps: (item: any) => {
          return { label: item?.label }
        },
        defaultItem: {
          href: 'home',
          label: 'Home',
        },
      },
      fields: [
        {
          type: 'string',
          label: 'Link',
          name: 'href',
        },
        {
          type: 'string',
          label: 'Label',
          name: 'label',
        },
      ],
    },
    {
      type: 'image',
      name: 'logo',
      label: 'Logo',
    },
    {
      type: 'object',
      label: 'Footer',
      name: 'footer',
      fields: [
        {
          type: 'rich-text',
          label: 'Intro',
          name: 'intro',
        },
        {
          type: 'object',
          label: 'Social Links',
          name: 'socialLinks',
          list: true,
          itemProps: (item: any) => {
            return { label: item?.label }
          },
          fields: [
            {
              type: 'string',
              label: 'Label',
              name: 'label',
            },
            {
              type: 'string',
              label: 'Link',
              name: 'href',
            },
          ],
        },
        {
          type: 'rich-text',
          label: 'Other links',
          name: 'otherLinks',
        },
        {
          type: 'rich-text',
          label: 'Contact info',
          name: 'contactInfo',
        },
      ],
    },
  ],
}
