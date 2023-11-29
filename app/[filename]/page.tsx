import React from 'react'
import BlockRenderer from '../../components/atoms/BlockRenderer'
import { client } from '@/tina/__generated__/client'

export default async function HomePage({ params: { filename } }: any) {
  const tinaFileData = await getTinaFile(filename)

  return (
    <main className="pt-40 lg:pt-16">
      <BlockRenderer
        type="page"
        rawData={tinaFileData}
        {...tinaFileData.data.page}
      />
    </main>
  )
}

const getTinaFile = async (filename: string) => {
  let refinedFileName = filename == 'index' ? 'home' : filename

  const tinaProps = await client.queries.page({
    relativePath: `${refinedFileName}.mdx`,
  })

  return tinaProps
}

export const revalidate = 0
