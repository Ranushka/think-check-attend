import React from 'react'
import { client } from '@/tina/__generated__/client'
import { Posts } from './posts'

export default async function Page() {
  const tinaData = await getPosts()

  return (
    <div>
      <div className="relative isolate overflow-hidden pt-14 h-36"></div>
      <h1 className="w-full relative	mb-8 text-6xl font-extrabold tracking-normal text-center title-font">
        Blog
      </h1>
      <Posts rawData={tinaData} />
    </div>
  )
}

const getPosts = async () => {
  const tinaProps = await client.queries.postConnection()
  return tinaProps
}
