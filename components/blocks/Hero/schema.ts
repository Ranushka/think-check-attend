const hero = {
  name: 'Hero',
  label: 'Hero',
  ui: {
    defaultItem: {
      title: 'From our photo wall',
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
    {
      type: 'string',
      name: 'intro',
      label: 'Intro',
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image',
    },
  ],
}

export default hero
