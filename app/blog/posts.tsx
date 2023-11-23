'use client'

import React from 'react'
import Link from 'next/link'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { BsArrowRight } from 'react-icons/bs'

import format from 'date-fns/format'
import { useTina } from 'tinacms/dist/react'

export const Posts = ({ rawData }: any) => {
  const {
    data: {
      postConnection: { edges },
    },
  }: any = useTina(rawData)

  return (
    <div className="max-w-5xl mx-auto px-10">
      {/* {JSON.stringify(edges)} */}
      {edges.map((postData: any) => {
        const post = postData.node
        const date = new Date(post.date)
        let formattedDate = ''
        if (!isNaN(date.getTime())) {
          formattedDate = format(date, 'MMM dd, yyyy')
        }
        return (
          <Link
            key={post._sys.filename}
            href={`/blog/` + post._sys.filename}
            className="group block px-6 sm:px-8 md:px-10 py-10 mb-8 last:mb-0 bg-gray-50 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-1000 rounded-md shadow-sm transition-all duration-150 ease-out hover:shadow-md hover:to-gray-50 dark:hover:to-gray-800"
          >
            <h3
              className={`text-gray-700 dark:text-white text-3xl lg:text-4xl font-semibold title-font mb-5 transition-all duration-150 ease-out `}
            >
              {post.title}{' '}
              <span className="inline-block opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                <BsArrowRight className="inline-block h-8 -mt-1 ml-1 w-auto opacity-70" />
              </span>
            </h3>
            <p>{post.intro}</p>
          </Link>
        )
      })}
    </div>
  )
}
