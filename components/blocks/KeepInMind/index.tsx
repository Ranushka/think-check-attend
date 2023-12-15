import React from 'react'
import KeepInMindSchema from './schema'
import RendererMarkdown from '../../atoms/RendererMarkdown'

const KeepInMind = ({ data }: any) => {
  return (
    <div className="text-base leading-7 mb-6 bg-[#d7faff] px-8 py-4 border border-[#d7faff] rounded-lg relative">
      <div className="color-text-with-bg">
        <h3 className="text-3xl my-4">Keep in mind...</h3>
        <RendererMarkdown content={data.content} />
      </div>
    </div>
  )
}

export default KeepInMind
export { KeepInMindSchema }
