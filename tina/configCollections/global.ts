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
      label: 'Header',
      name: 'header',
      fields: [
        {
          type: 'object',
          label: 'Nav Links',
          name: 'nav',
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
      ],
    },
    {
      type: 'object',
      label: 'Footer',
      name: 'footer',
      fields: [
        {
          type: 'object',
          label: 'Social Links',
          name: 'socialLinks',
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
          type: 'object',
          label: 'Social Links',
          name: 'social',
          fields: [
            {
              type: 'string',
              label: 'Facebook',
              name: 'facebook',
            },
            {
              type: 'string',
              label: 'Twitter',
              name: 'twitter',
            },
            {
              type: 'string',
              label: 'Instagram',
              name: 'instagram',
            },
            {
              type: 'string',
              label: 'Github',
              name: 'github',
            },
          ],
        },
      ],
    },
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
  ],
}
