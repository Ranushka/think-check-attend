import { blockSchemas } from '../../components/blocks'

export const page = {
  name: 'page',
  label: 'Page',
  path: 'content/page',
  format: 'mdx',
  ui: {
    router: ({ document }: any) => {
      if (document._sys.filename === 'home') {
        return '/'
      }

      return `/${document._sys.filename}`
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Title',
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
