import React from 'react'
import { tinaField } from 'tinacms/dist/react'
import AboutPageSchema from './schema'
import RendererMarkdown from '../../atoms/RendererMarkdown'

const AboutPage = ({ data }: any) => {
  const { intro, introImg, content } = data

  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              data-tina-field={tinaField(data, 'image')}
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover rounded-tr-[200px]"
              src={introImg}
              alt="paws to heart - pet boarding and daycare - dubai"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base font-semibold leading-7 text-primary-400">
              Our story
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pet mom to pet owners
            </h1>
            <p
              className="mt-6 text-xl leading-8 text-gray-700"
              data-tina-field={tinaField(data, 'intro')}
            >
              {intro}
            </p>
            <div
              className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none"
              data-tina-field={tinaField(data, 'content')}
            >
              <RendererMarkdown content={content} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
export { AboutPageSchema }
