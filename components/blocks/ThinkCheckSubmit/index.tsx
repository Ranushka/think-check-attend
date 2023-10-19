import Image from 'next/image'
import Link from '../../../components/atoms/Link'
import ThinkCheckSubmitSchema from './schema'
import RendererMarkdown from '../../../components/atoms/RendererMarkdown'
import { url } from 'inspector'
export { ThinkCheckSubmitSchema }

export default function ThinkCheckSubmit({ data }: any) {
  const { content, image } = data

  return (
    <div
      className="bg-cover bg-center relative"
      // style={{ backgroundImage: `url(${image})` }}
    >
      <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8 ">
        <div className="mx-auto max-w-3xl text-center bg-white py-10 px-16 rounded-2xl">
          <RendererMarkdown content={content} />
          <Link
            href="https://thinkchecksubmit.org/"
            target="_blank"
            className="underline mt-5 mb-4 block text-gray-700"
            size="xl"
            variant="row"
          >
            https://<span className="text-usp-think">think</span>
            <span className="text-usp-check">check</span>
            <span className="text-usp-attend">submit</span>.org/
          </Link>
        </div>
      </div>

      <Image
        alt="home hero"
        fill
        src={image || ''}
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-90 blur-sm"
      />
    </div>
  )
}
