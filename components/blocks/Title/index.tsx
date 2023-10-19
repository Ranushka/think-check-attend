import React from 'react'
import { tinaField } from 'tinacms/dist/react'
import titleSchema from './schema'
import RendererMarkdown from '../../atoms/RendererMarkdown'

const Title = ({ data }: any) => {
  return (
    <div className="px-6 lg:px-8 py-8 sm:py-12">
      <div className="mx-auto max-w-2xl text-center">
        <p
          className="text-base font-semibold leading-7"
          data-tina-field={tinaField(data, 'subtitle')}
        >
          {data.subtitle}
        </p>
        <h1
          className="mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          data-tina-field={tinaField(data, 'title')}
        >
          {data.title}
        </h1>
        <div className="mt-6" data-tina-field={tinaField(data, 'intro')}>
          <RendererMarkdown content={data.introduction} />
        </div>
      </div>
    </div>
  )
}

export default Title
export { titleSchema }
