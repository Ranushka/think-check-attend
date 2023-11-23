import { defineConfig } from 'tinacms'
import { global } from './configCollections/global'
import { page } from './configCollections/page'
import { blog } from './configCollections/blog'

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
    collections: [page, global, blog],
  },
})
