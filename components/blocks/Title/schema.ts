// import { iconSchema } from "../../util/icon";

export default {
  name: 'Title',
  label: 'Title',
  ui: {
    defaultItem: {
      body: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.',
    },
  },
  fields: [
    {
      type: 'string',
      label: 'title',
      name: 'title',
    },
    {
      type: 'rich-text',
      name: 'introduction',
      label: 'Introduction',
    },
  ],
}
