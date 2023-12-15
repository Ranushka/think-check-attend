const BB_LocationsList = {
  name: 'BB_LocationsList',
  label: 'LocationsList',
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
    {
      type: 'string',
      name: 'locations',
      label: 'locations',
      list: true,
    },
  ],
}

export default BB_LocationsList
