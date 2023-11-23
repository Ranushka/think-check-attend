'use client'

import React from 'react'
import format from 'date-fns/format'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { Prism } from 'tinacms/dist/rich-text/prism'
import type { TinaMarkdownContent, Components } from 'tinacms/dist/rich-text'
import { tinaField, useTina } from 'tinacms/dist/react'
import RendererMarkdown from '@/components/atoms/RendererMarkdown'
import Image from 'next/image'

const components: Components<{
  BlockQuote: {
    children: TinaMarkdownContent
    authorName: string
  }
  DateTime: {
    format?: string
  }
  Video: {
    url?: string
  }
  NewsletterSignup: {
    placeholder: string
    buttonText: string
    children: TinaMarkdownContent
    disclaimer?: TinaMarkdownContent
  }
}> = {
  BlockQuote: (props: {
    children: TinaMarkdownContent
    authorName: string
  }) => {
    return (
      <div>
        <blockquote>
          <TinaMarkdown content={props.children} />
          {props.authorName}
        </blockquote>
      </div>
    )
  },

  DateTime: (props) => {
    const dt = React.useMemo(() => {
      return new Date()
    }, [])

    switch (props.format) {
      case 'iso':
        return <span>{format(dt, 'yyyy-MM-dd')}</span>
      case 'utc':
        return <span>{format(dt, 'eee, dd MMM yyyy HH:mm:ss OOOO')}</span>
      case 'local':
        return <span>{format(dt, 'P')}</span>
      default:
        return <span>{format(dt, 'P')}</span>
    }
  },
  Video: ({ url }: any) => {
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
            className="w-full h-60"
            src={embedUrl}
            allowFullScreen
          ></iframe>
        )}
      </div>
    )
  },
  NewsletterSignup: (props) => {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="">
            <TinaMarkdown content={props.children} />
          </div>
          <div className="mt-8 ">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email-address"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500 sm:max-w-xs rounded-md"
                placeholder={props.placeholder}
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center py-3 px-5 border border-transparent text-base font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  {props.buttonText}
                </button>
              </div>
            </form>
            <div className="mt-3 text-sm text-gray-500">
              {props.disclaimer && <TinaMarkdown content={props.disclaimer} />}
            </div>
          </div>
        </div>
      </div>
    )
  },
}

export const Post = ({ rawData }: any) => {
  const {
    data: { post },
  }: any = useTina(rawData)

  const date = new Date(post.date)
  let formattedDate = ''
  if (!isNaN(date.getTime())) {
    formattedDate = format(date, 'MMM dd, yyyy')
  }

  return (
    <div className="flex-1">
      <div className={`flex-1 pb-2`}>
        <h2
          data-tina-field={tinaField(post, 'title')}
          className={`w-full relative	mb-2 text-6xl font-extrabold tracking-normal text-center title-font`}
        >
          <span className={`bg-clip-text`}>{post.title}</span>
        </h2>
        <div
          data-tina-field={tinaField(post, 'author')}
          className="flex items-center justify-center mb-8"
        >
          <p
            data-tina-field={tinaField(post, 'date')}
            className="text-base text-gray-400 group-hover:text-gray-500 dark:text-gray-300 dark:group-hover:text-gray-150"
          >
            {formattedDate}
          </p>
        </div>
      </div>
      {post.heroImg && (
        <div className="px-4 w-full">
          <Image
            src={post.heroImg}
            alt={post.title}
            width={1024}
            height={400}
            className="rounded-lg opacity-100 m-auto"
          />
        </div>
      )}
      <div
        data-tina-field={tinaField(post, '_body')}
        className="m-auto max-w-5xl p-8"
      >
        <RendererMarkdown content={post._body} />
      </div>
    </div>
  )
}
