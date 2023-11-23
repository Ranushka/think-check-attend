'use client'

import { TinaMarkdown } from 'tinacms/dist/rich-text'

const RendererMarkdown = ({ content }: any) => {
  return (
    <TinaMarkdown
      content={content}
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
        p: (props: any) => {
          return (
            <p className="text-base leading-7 text-gray-600 mb-6">
              {props.children}
            </p>
          )
        },
        blockquote: (props: any) => {
          return (
            <blockquote className="text-xl font-semibold leading-8 tracking-tight text-gray-900 mb-8">
              {props.children}
            </blockquote>
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
              href={props.href}
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
