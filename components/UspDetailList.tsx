import { classNames } from '@/helpers/classNames'
import Image from 'next/image'
import Link from './atoms/Link'

const people = [
  {
    name: 'Think.',
    img: '/images/usp/think.png',
    bg: 'bg-usp-think',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    bio: (
      <div>
        Is it the right conference to attend and present your research? Are you
        submitting your abstract to a trusted conference?
        <ul className="text-sm list-disc ml-6 mt-4 text-gray-600">
          <li>New conferences are announced each year.</li>
          <li>
            Stories of questionable and fake conferences are also on the rise.
          </li>
          <li>
            It can be challenging to find up-to-date guidance when choosing the
            right conference to attend.
          </li>
          <li>
            How can you be sure the conference you are considering is the right
            conference to attend and present your research?
          </li>
        </ul>
      </div>
    ),
  },
  {
    name: 'Check.',
    img: '/images/usp/check.png',
    bg: 'bg-usp-check',
    bio: (
      <div>
        This check list provides guidance on trusting a conference to attend and
        present your research.
        <ul className="text-sm list-disc ml-6 mt-4 text-gray-600">
          <li>
            Are you aware of the society or the association organizing this
            conference?
          </li>
          <li>Can you easily identify the venue of the conference?</li>
          <li>Is it the first time that this conference is being held?</li>
          <li>Have you or your colleagues attended this conference before?</li>
          <li>
            Is it clear what fees will be charged (conference fee, registration
            fees, …, etc.) and would these be waived if you are accepted as a
            speaker?
          </li>
        </ul>
        <Link href={'/'} className="mt-5 block">
          See the full list.
        </Link>
      </div>
    ),
  },
  {
    name: 'Attend.',
    img: '/images/usp/attend.png',
    bg: 'bg-usp-attend',
    bio: (
      <div>
        Complete the check list and attend the conference or submit your
        abstract only if you are satisfied and you can answer ‘yes’ to most or
        all of the questions.
        <ul className="text-sm list-disc ml-6 mt-4 text-gray-600">
          <li>
            Attending the right conference will give you the opportunity to
            maintain your awareness of the latest updates and improvements in
            your field.
          </li>
          <li>
            Attending the right conference will enhance your career and expand
            your connections within the academic community.
          </li>
          <li>
            Publishing your Conference Paper under a professional publishing
            experience, where your work is reviewed, edited, indexed and easily
            discoverable will enhance your reputation and your chance of gaining
            citations.
          </li>
          <li>
            Only then should you attend and present your research at this
            conference.
          </li>
        </ul>
      </div>
    ),
  },
]

export default function UspDetailList() {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our approch
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            By Following These Steps, Empowering Scholars with Informed
            Conference Choices. Helping You Thrive in Your Research Journey.
          </p>
        </div>
        <ul className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3">
          {people.map((person) => (
            <li
              key={person.name}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
            >
              <div>
                <div
                  className={classNames(
                    'p-4 text-3xl font-bold text-white w-44 relative mr-14 pb-40',
                    person.bg,
                  )}
                >
                  <Image
                    alt={person.name}
                    width={150}
                    height={150}
                    src={person.img}
                    className="absolute z-0 object-cover opacity-60 -bottom-8 -right-16"
                  />
                  {person.name}
                </div>
              </div>

              <div className="max-w-xl w-full">{person.bio}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
