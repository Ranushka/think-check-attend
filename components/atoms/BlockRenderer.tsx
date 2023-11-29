'use client'

import { tinaField, useTina } from 'tinacms/dist/react'
import { blockComponents } from '../blocks'

const BlockRenderer = ({ rawData }: any) => {
  const { data }: any = useTina(rawData)
  const blocksList = data.page.blocks

  if (!blocksList) {
    return null
  }

  return blocksList.map(function (block: any, i: number) {
    return (
      // <div key={i} data-tina-field={tinaField(block)}>
      <div key={i}>
        <Block block={block} />
      </div>
    )
  })
}

const blockMapping = Object.fromEntries(
  Object.entries(blockComponents).map(([key, value]) => [key, value]),
)

const Block: React.FC<{ block: any }> = ({ block }) => {
  const blockName = block?.__typename?.replace('PageBlocks', '')

  const BlockComponent = blockMapping[blockName]

  return BlockComponent ? <BlockComponent data={block} /> : null
}

export default BlockRenderer
