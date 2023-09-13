import Image from 'next/image'
import NewsLetter from '@/components/NewsLetter'
import OurMission from '@/components/OurMission'
import TSC from '@/components/TCS'
import UspDetailList from '@/components/UspDetailList'
import { UspList } from '@/components/UspList'
import ConferenceForm from './ConferenceForm'
import { classNames } from '@/helpers/classNames'

const isDarkImage = false

export default function Home() {
  return (
    <main>
      <div
        className={classNames(
          'relative isolate overflow-hidden pt-14 ',
          isDarkImage ? 'bg-gray-900' : 'bg-white',
        )}
      >
        <div className="mx-auto max-w-4xl py-32 sm:py-36 lg:py-44">
          <div className="text-center">
            <h1
              className={classNames(
                'text-4xl font-semibold tracking-tight sm:text-6xl',
                isDarkImage ? 'text-white' : 'text-gray-900',
              )}
            >
              Validate Conferences to Attend and Present Your Research.
            </h1>
            <div className="max-w-xl m-auto mt-10 mb-5">
              <ConferenceForm />
            </div>

            <p
              className={classNames(
                'mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto',
                isDarkImage ? 'text-white' : 'text-gray-700',
              )}
            >
              Conferences credibility, networking, and quality. Ensure informed
              choices for successful research journeys.
            </p>
          </div>
          <UspList />
        </div>
        <Image
          alt="home hero"
          fill
          src={'/images/home/hero_white.jpg'}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-20"
        />
        {/*
        <div className="absolute text-gray-500 bottom-5 right-8 text-xs">
          Picture is taken during <br />
          <strong>management conference</strong> held in{' '}
          <strong>Portugal</strong>
        </div> 
        */}
      </div>

      <OurMission />
      <UspDetailList />
      <TSC />
      <NewsLetter />
    </main>
  )
}
