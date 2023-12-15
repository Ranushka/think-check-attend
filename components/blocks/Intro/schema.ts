const schema = {
  name: 'BB_Intro',
  label: 'Intro',
  fields: [
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
          type: 'rich-text',
          label: 'content',
          name: 'content',
        },
      ],
    },
  ],
}

export default schema
