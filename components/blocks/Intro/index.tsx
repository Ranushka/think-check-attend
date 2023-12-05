import Image from 'next/image'
import IntroSchema from './schema'
import RendererMarkdown from '../../../components/atoms/RendererMarkdown'
import { tinaField } from 'tinacms/dist/react'
export { IntroSchema }

export default function Intro({ data }: any) {
  const { list } = data

  return (
    <ul
      className="flex justify-center text-center max-w-6xl mx-auto -mt-16 relative"
      data-tina-field={tinaField(data, 'list')}
    >
      {list?.map((item: any, key: number) => (
        <li key={key} className="p-4 w-full" data-tina-field={tinaField(item)}>
          <div>
            <div className="p-4 text-3xl font-bold text-gray-700 relative">
              <Image
                alt={item?.name}
                width={320}
                height={320}
                src={item?.image}
                className="object-cover"
              />
              <h2 className="mt-8"> {item?.name}</h2>
            </div>
          </div>
          <div className="max-w-xl w-full">
            <RendererMarkdown content={item?.content} />
          </div>
        </li>
      ))}
    </ul>
  )
}
