import React from 'react'
import { tinaField } from 'tinacms/dist/react'
import titleSchema from './schema'
import RendererMarkdown from '../../atoms/RendererMarkdown'

const Title = ({ data }: any) => {
  return (
    <div
      className="px-6 lg:px-8 py-8 sm:py-12"
      data-tina-field={tinaField(data)}
    >
      <div className="mx-auto max-w-2xl text-center">
        <h1
          className="mt-2 text-4xl font-bold tracking-tight text-gray-600 sm:text-5xl"
          data-tina-field={tinaField(data, 'title')}
        >
          {data.title}
        </h1>
        <div className="mt-6" data-tina-field={tinaField(data, 'introduction')}>
          <RendererMarkdown content={data.introduction} />
        </div>
      </div>
    </div>
  )
}

export default Title
export { titleSchema }
