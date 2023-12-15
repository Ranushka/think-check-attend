'use client'

import { tinaField, useTina } from 'tinacms/dist/react'
import Block from './Block'

const BlockRenderer = ({ rawData }: any) => {
  // console.log('-----data--->>>>', rawData)

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

export default BlockRenderer
