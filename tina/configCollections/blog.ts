export const blog = {
  label: 'Blog Posts',
  name: 'post',
  path: 'content/blog',
  format: 'mdx',
  ui: {
    router: ({ document }: any) => {
      return `/blog/${document._sys.filename}`
    },
  },
  fields: [
    {
      type: 'string',
      label: 'Title',
      name: 'title',
      isTitle: true,
      required: true,
    },
    {
      type: 'image',
      name: 'heroImg',
      label: 'Hero Image',
    },
    {
      type: 'datetime',
      label: 'Posted Date',
      name: 'date',
      ui: {
        dateFormat: 'MMMM DD YYYY',
        timeFormat: 'hh:mm A',
      },
    },
    {
      type: 'string',
      label: 'Intro',
      name: 'intro',
      ui: {
        component: 'textarea',
      },
      required: true,
    },
    {
      type: 'rich-text',
      label: 'Body',
      name: '_body',
      templates: [
        {
          name: 'DateTime',
          label: 'Date & Time',
          inline: true,
          fields: [
            {
              name: 'format',
              label: 'Format',
              type: 'string',
              options: ['utc', 'iso', 'local'],
            },
          ],
        },
        {
          name: 'BlockQuote',
          label: 'Block Quote',
          fields: [
            {
              name: 'children',
              label: 'Quote',
              type: 'rich-text',
            },
            {
              name: 'authorName',
              label: 'Author',
              type: 'string',
            },
          ],
        },
        {
          name: 'video',
          label: 'Video',
          fields: [
            {
              name: 'url',
              label: 'url',
              type: 'string',
            },
          ],
        },
        {
          name: 'NewsletterSignup',
          label: 'Newsletter Sign Up',
          fields: [
            {
              name: 'children',
              label: 'CTA',
              type: 'rich-text',
            },
            {
              name: 'placeholder',
              label: 'Placeholder',
              type: 'string',
            },
            {
              name: 'buttonText',
              label: 'Button Text',
              type: 'string',
            },
            {
              name: 'disclaimer',
              label: 'Disclaimer',
              type: 'rich-text',
            },
          ],
          ui: {
            defaultItem: {
              placeholder: 'Enter your email',
              buttonText: 'Notify Me',
            },
          },
        },
      ],
      isBody: true,
    },
  ],
}
