'use client'

import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { LifebuoyIcon } from '@heroicons/react/20/solid'

const RendererMarkdown = (propsParent: any) => {
  return (
    <TinaMarkdown
      {...propsParent}
      components={{
        video: ({ url }: any) => {
          let embedUrl = ''

          if (url.includes('youtube.com')) {
            const videoId = url.split('v=')[1]
            embedUrl = `https://www.youtube.com/embed/${videoId}`
          } else if (url.includes('vimeo.com')) {
            const videoId = url.split('/').pop()
            embedUrl = `https://player.vimeo.com/video/${videoId}`
          }

          return (
            <div className="video-container">
              {embedUrl && (
                <iframe
                  className="w-full h-96"
                  src={embedUrl}
                  allowFullScreen
                ></iframe>
              )}
            </div>
          )
        },
        blockquote: (props: any) => {
          return (
            <div className="text-base leading-7 mb-6 bg-primary-50 pl-12 pr-8 py-4 border border-primary-100 rounded-lg relative">
              <LifebuoyIcon
                className="h-6 w-6 absolute -ml-8 text-primary-300"
                aria-hidden="true"
              />

              <blockquote className="text-primary-950 opacity-70">
                <h4 className="text-primary-950 opacity-90 text-xl font-semibold">
                  Tips ...
                </h4>
                {props.children}
              </blockquote>
            </div>
          )
        },
        p: (props: any) => {
          return (
            <p className="text-base leading-7 text-gray-600 mb-6">
              {props.children}
            </p>
          )
        },
        ul: (props: any) => {
          return (
            <ul className="list-disc pl-4 text-gray-600 mb-8">
              {props.children}
            </ul>
          )
        },
        ol: (props: any) => {
          return (
            <ol className="list-decimal pl-4 text-gray-600 mb-8">
              {props.children}
            </ol>
          )
        },
        a: (props: any) => {
          return (
            <a
              className="font-semibold text-primary-700 hover:text-primary-800 cursor-pointer"
              href={props.url}
            >
              {props.children}
            </a>
          )
        },
        h2: (props: any) => {
          return <h2 className="text-5xl title-font mb-8">{props.children}</h2>
        },
        h3: (props: any) => {
          return (
            <h3 className="text-3xl mb-6 text-gray-600">{props.children}</h3>
          )
        },
        h4: (props: any) => {
          return (
            <h4 className="text-2xl mb-6 text-gray-600">{props.children}</h4>
          )
        },
        h5: (props: any) => {
          return (
            <h4 className="text-xl mb-6 text-gray-600">{props.children}</h4>
          )
        },
      }}
    />
  )
}

export default RendererMarkdown
