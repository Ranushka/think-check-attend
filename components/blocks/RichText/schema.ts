// import { iconSchema } from "../../util/icon";

export default {
  name: 'richText',
  label: 'Rich Text',
  ui: {
    defaultItem: { width: 'max-w-2xl mx-auto' },
  },
  fields: [
    {
      component: 'select',
      type: 'string',
      name: 'width',
      label: 'Width',
      description: 'Select a width for the content',
      options: [
        'max-w-sm mx-auto',
        'max-w-lg mx-auto',
        'max-w-2xl mx-auto',
        'max-w-4xl mx-auto',
        'max-w-6xl mx-auto',
        'w-full',
      ],
    },
    {
      type: 'rich-text',
      name: 'content',
      label: 'Content',
    },
  ],
}
