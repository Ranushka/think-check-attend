import { defineConfig } from 'tinacms'
import { global } from './configCollections/global'
import { page } from './configCollections/page'

const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: '1388c6a9-6587-457c-b238-8812ee37591f', // Get this from tina.io
  token: '7a87fb3116ed9f16c25d480c614fd9d63d185180', // Get this from tina.io

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      page,
      global,
      {
        name: 'post',
        label: 'Posts',
        path: 'content/posts',
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body',
            isBody: true,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => `/demo/blog/${document._sys.filename}`,
        },
      },
    ],
  },
})
