import React from 'react'
import { client } from '@/tina/__generated__/client'
import { Post } from './post'

export default async function HomePage({ params: { filename } }: any) {
  const tinaFileData = await getTinaFile(filename)

  return (
    <main>
      <div className="relative isolate overflow-hidden pt-14 h-28"></div>
      <Post rawData={tinaFileData} />
    </main>
  )
}

const getTinaFile = async (filename: any) => {
  const tinaProps = await client.queries.post({
    relativePath: `${filename}.mdx`,
  })

  return tinaProps
}
