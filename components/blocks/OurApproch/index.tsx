import Image from 'next/image'
import OurApprochSchema from './schema'
import { classNames } from '../../../helpers/classNames'
import RendererMarkdown from '../../../components/atoms/RendererMarkdown'
import { tinaField } from 'tinacms/dist/react'
export { OurApprochSchema }

export default function OurApproch({ data }: any) {
  const { list, introduction } = data

  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-5">
        <div
          className="max-w-2xl xl:col-span-2"
          data-tina-field={tinaField(data, 'intro')}
        >
          <RendererMarkdown content={introduction} />
        </div>
        <ul
          className="-mt-12 space-y-12 divide-y divide-gray-200 xl:col-span-3"
          data-tina-field={tinaField(data, 'list')}
        >
          {list?.map((item: any, key: number) => (
            <li
              key={key}
              className="flex flex-col gap-10 pt-12 sm:flex-row"
              data-tina-field={tinaField(item)}
            >
              <div>
                <div
                  className="p-4 text-3xl font-bold text-white w-44 relative mr-14 pb-40"
                  style={{ backgroundColor: item.bg }}
                >
                  <Image
                    alt={item.name}
                    width={150}
                    height={150}
                    src={item.image}
                    className="absolute z-0 object-cover opacity-60 -bottom-8 -right-16"
                  />
                  {item?.name}
                </div>
              </div>
              <div className="max-w-xl w-full">
                <RendererMarkdown content={item?.content} />
              </div>
            </li>
          ))}
        </ul>
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
