const schema = {
  name: 'OurApproch',
  label: 'Our Approch',
  fields: [
    {
      type: 'rich-text',
      label: 'Introduction',
      name: 'introduction',
    },
    {
      type: 'object',
      list: true,
      name: 'list',
      label: 'List',
      description: 'Try to add only 3 items',
      ui: {
        itemProps: (item: any) => {
          return { label: `${item?.name}` }
        },
      },
      fields: [
        {
          type: 'string',
          name: 'name',
          label: 'Name',
        },
        {
          type: 'image',
          name: 'image',
          label: 'Image',
        },
        {
          type: 'string',
          name: 'bg',
          label: 'Background Color',
          description: 'Edit the page background color here',
          ui: {
            component: 'color',
            colorFormat: 'hex',
            colors: ['#b50512', '#f97308', '#0d672c'],
            widget: 'sketch',
          },
        },
        {
          type: 'rich-text',
          label: 'content',
          name: 'content',
        },
      ],
    },
  ],
}

export default schema
