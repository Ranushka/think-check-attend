import { blockSchemas } from '../../components/blocks'

export const page = {
  label: 'Pages',
  name: 'page',
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      description:
        'The title of the page. This is used to display the title in the CMS',
      isTitle: true,
      required: true,
    },
    {
      type: 'object',
      list: true,
      name: 'blocks',
      label: 'Sections',
      ui: {
        visualSelector: true,
      },
      templates: blockSchemas,
    },
  ],
}
