import client from '@/tina/__generated__/client'
import BlockRenderer from '@/components/atoms/BlockRenderer'

export default async function Page() {
  const tinaData = await getData()

  return (
    <main>
      <BlockRenderer rawData={tinaData} {...tinaData.data.page} />
    </main>
  )
}

const getData = async () => {
  const tinaProps = await client.queries.page({
    relativePath: `home.mdx`,
  })

  return tinaProps
}
