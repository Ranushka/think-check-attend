const hero = {
  name: 'BB_OurMission',
  label: 'Our Mission',
  ui: {
    defaultItem: {
      title: 'From our photo wall',
    },
  },
  fields: [
    {
      type: 'rich-text',
      label: 'content',
      name: 'content',
    },
    {
      type: 'object',
      list: true,
      name: 'stats',
      label: 'Stats',
      description: 'Try to add only 3 items',
      ui: {
        itemProps: (item: any) => {
          return { label: `${item?.number} - ${item?.name}` }
        },
      },
      fields: [
        {
          type: 'string',
          name: 'number',
          label: 'Stat number with text',
          description: 'The number',
        },
        {
          type: 'string',
          name: 'name',
          label: 'About stat',
          description: 'Stat intro',
        },
      ],
    },
  ],
}

export default hero
