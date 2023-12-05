import Image from 'next/image'
import OurMissionSchema from './schema'
import ConferenceForm from '../../../app/ConferenceForm'
import { UspList } from '../../../components/UspList'
import Link from '../../../components/atoms/Link'
import Button from '../../../components/atoms/Button'
import { tinaField } from 'tinacms/dist/react'
import RendererMarkdown from '../../../components/atoms/RendererMarkdown'
export { OurMissionSchema }

export default function OurMission({ data }: any) {
  const { stats, content } = data
  return (
    <div className="bg-white py-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
            <div data-tina-field={tinaField(data, 'content')}>
              <RendererMarkdown content={content} />
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl
                className="w-64 space-y-8 xl:w-80 xl:mt-10"
                data-tina-field={tinaField(data)}
              >
                {stats?.map((stat: any) => (
                  <div
                    key={stat.name}
                    className="flex flex-col-reverse gap-y-1"
                    data-tina-field={tinaField(stat)}
                  >
                    <dt className="text-sm text-gray-600">{stat.name}</dt>
                    <dd className="text-5xl font-semibold tracking-tight text-gray-900">
                      {stat.number}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export default function Hero({ data }: any) {
//   const { intro, title, image } = data

//   return (
//     <div className={'relative isolate overflow-hidden pt-14 '}>
//       <div className="mx-auto max-w-4xl py-32 sm:py-36 lg:py-44">
//         <div className="text-center">
//           <h1
//             className={'text-4xl font-semibold tracking-tight sm:text-6xl'}
//             data-tina-field={tinaField(data, 'title')}
//           >
//             {title}
//           </h1>
//           <div className="max-w-xl m-auto mt-10 mb-5">
//             <div className="flex items-center justify-center gap-x-6 mt-5">
//               <Link
//                 className="underline underline-offset-4 text-gray-700"
//                 href={'#'}
//               >
//                 Download checklist <span aria-hidden="true">↓</span>
//               </Link>
//               <Button variant="primary" type="submit" title="Start Validating">
//                 Start Validating
//               </Button>
//             </div>
//           </div>

//           <p
//             className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-gray-700"
//             data-tina-field={tinaField(data, 'intro')}
//           >
//             {intro}
//           </p>
//         </div>
//         <UspList />
//       </div>

//       <Image
//         alt="home hero"
//         fill
//         // src={'/images/home/hero_white.jpg'}
//         src={image || ''}
//         className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-90"
//       />
//     </div>
//   )
// }
