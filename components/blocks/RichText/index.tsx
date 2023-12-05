import React from 'react'
import { tinaField } from 'tinacms/dist/react'
import RichTextSchema from './schema'
import RendererMarkdown from '../../atoms/RendererMarkdown'

const RichText = ({ data }: any) => {
  return (
    <div className={`my-10 ${data.width}`}>
      <RendererMarkdown content={data.content} />
    </div>
  )
}

export default RichText
export { RichTextSchema }
