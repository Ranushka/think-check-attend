export default {
  name: 'LocationsList',
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
