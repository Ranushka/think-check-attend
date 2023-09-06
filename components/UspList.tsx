import { classNames } from '@/helpers/classNames'
import Image from 'next/image'

const stats = [
  {
    name: 'Think.',
    img: '/images/usp/think.png',
    intro:
      'Carefully consider is this is the right conference for your research journey.',
    bg: 'bg-usp-think',
  },
  {
    name: 'Check.',
    img: '/images/usp/check.png',
    intro:
      'Use the checklist for smart conference choices and informed decisions.',
    bg: 'bg-usp-check',
  },
  {
    name: 'Attend.',
    img: '/images/usp/attend.png',
    intro:
      'Attend the conference, make a difference, and advance in your field.',
    bg: 'bg-usp-attend',
  },
]

export function UspList() {
  return (
    <div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        {stats.map((item) => (
          <div
            key={item.name}
            className={classNames(
              'overflow-hidden rounded-lg relative',
              'px-4 py-5 shadow sm:p-6',
              item.bg,
            )}
          >
            <div className="relative z-10">
              <dd className="text-5xl font-black text-white drop-shadow-md">
                {item.name}
              </dd>
              <dt className="text-xs mt-1 text-white">{item.intro}</dt>
            </div>
            <Image
              alt={item.name}
              width={150}
              height={150}
              src={item.img}
              className="absolute z-0 object-cover opacity-20 -top-3 -right-10"
            />
          </div>
        ))}
      </dl>
    </div>
  )
}
