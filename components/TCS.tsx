import { classNames } from '../helpers/classNames'
import Image from 'next/image'
import Link from './atoms/Link'

export default function TSC() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="mb-4">I am about to submit to a journal.!</h3>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Think. Check. Submit
          </h2>
          <h3 className="text-sm text-gray-700 mt-2">
            Global campaign to fight pradatory journals
          </h3>
          <Image
            alt="home hero"
            width={600}
            height={60}
            src={'/images/tcs.png'}
            className="m-auto mt-8"
          />
          <div className="mx-auto my-8 max-w-2xl text-lg text-justify">
            <p className=" text-gray-600">
              Think Check Submit is a global campaign to help researchers
              identify trusted journals for their research. It is a simple
              checklist that researchers can use to assess the credentials of a
              journal or a publisher.
            </p>
            <p className="mt-4 text-gray-600">
              The campaign has been produced with the support of a coalition
              from across the scholarly communications community in response to
              discussions about deceptive publishing.
            </p>
            <p className="mt-4 text-gray-900 text-center">
              For more details about Think Check Submit and its checklists,
              please visit{' '}
              <Link
                href="https://thinkchecksubmit.org/"
                target="_blank"
                className="text-3xl underline mt-5 block"
              >
                https://<span className="text-usp-think">think</span>
                <span className="text-usp-check">check</span>
                <span className="text-usp-attend">submit</span>.org/
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
