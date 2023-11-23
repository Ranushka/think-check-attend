import Image from 'next/image'
import heroSchema from './schema'
import ConferenceForm from '../../../app/ConferenceForm'
import { UspList } from '../../../components/UspList'
import Link from '../../../components/atoms/Link'
import Button from '../../../components/atoms/Button'
import { tinaField } from 'tinacms/dist/react'
import HeroImage from './HeroImage'
export { heroSchema }

export default function Hero({ data }: any) {
  const { intro, title, image } = data

  return (
    <div className="relative isolate overflow-hidden pt-14 ">
      <div className="mx-auto max-w-7xl py-32 sm:py-36 lg:py-44">
        <div className="text-left mx-8">
          <h1
            className="text-4xl font-semibold tracking-tight sm:text-6xl max-w-2xl"
            data-tina-field={tinaField(data, 'title')}
          >
            {title}
          </h1>
          <div className="max-w-xl mt-10 mb-5">
            <div className="flex flex-col md:flex-row gap-6 items-center gap-x-6 mt-5">
              <Link href={'/checklist'}>
                <Button variant="primary" className="font-semibold" size="lg">
                  Validate your conference
                </Button>
              </Link>
              <Link
                className="underline underline-offset-4 text-gray-700"
                href={'#'}
              >
                Download checklist <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>
          <div className="text-4xl font-black mt-8">
            <span className="text-usp-think mr-6">Think.</span>
            <span className="text-usp-check mr-6">Check.</span>
            <span className="text-usp-attend mr-6">Attend.</span>
          </div>
          <p
            className="mt-6 text-lg leading-8 max-w-2xl text-gray-700"
            data-tina-field={tinaField(data, 'intro')}
          >
            {intro}
          </p>
        </div>
      </div>

      <HeroImage />

      {/* <Image
        alt="home hero"
        fill
        src={image || ''}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-center opacity-90"
      /> */}
    </div>
  )
}
