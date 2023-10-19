import React from 'react'
import { tinaField } from 'tinacms/dist/react'
import Link from '../../../components/atoms/Link'
import Image from 'next/image'

import qnaSchema from './schema'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
export { qnaSchema }

function faqItem(faq: any) {
  return (
    <div key={faq.question} data-tina-field={tinaField(faq)}>
      <dt className="text-base font-semibold leading-7 text-gray-900">
        {faq.question}
      </dt>
      <dd className="mt-2 text-base leading-7 text-gray-600">
        <TinaMarkdown content={faq.answer} />
      </dd>
    </div>
  )
}

export default function QnA({ data }: any) {
  return (
    <div className="py-24 sm:py-28 lg:flex max-w-6xl mx-5 lg:mx-auto">
      <div className="w-full lg:w-2/6 pr-10 relative pb-10">
        <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600">
          Can’t find the answer you’re looking for? Check our{' '}
          <Link
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            FaQ page
          </Link>{' '}
          or reach via{' '}
          <Link
            href="#"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Whatsapp
          </Link>{' '}
          we are happy to answer.
        </p>

        <Image
          alt="Contact Paws to Heart - Pet bordeing and Daycare - Dubai"
          src={`/image/contact.png`}
          width="300"
          height="400"
          className="absolute bottom-0 hidden lg:block h-auto w-auto"
        />
      </div>
      <div className="w-full lg:w-4/6">
        <dl className="space-y-10">
          {data.items.map((faq: any) => faqItem(faq))}
        </dl>
      </div>
    </div>
  )
}
