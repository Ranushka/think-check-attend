import GoogleSheetForm from './GoogleSheetForm'
import GoogleSearch from './GoogleSearch'
import TotalScore from './TotalScore'
import { classNames } from '@/helpers/classNames'

const calculateFinalCount = (scoreCard: any) => {
  if (scoreCard) {
    const totalScore: any = Object.values(scoreCard).reduce(
      (total: any, value: any) => total + value,
      0,
    )
    return String(totalScore.toFixed(2))
  }

  return '0-0'
}

export default function CheckListPage({ searchParams }: any) {
  const q = searchParams?.q

  // const {
  //   state: { scoreCard },
  // } = useGlobal()

  // const scoreIs = calculateFinalCount(scoreCard)

  // let scoreColorClass

  // if (parseInt(scoreIs) > 2) {
  //   scoreColorClass = 'text-usp-attend'
  // } else if (parseInt(scoreIs) > 1) {
  //   scoreColorClass = 'text-usp-check'
  // } else {
  //   scoreColorClass = 'text-usp-think'
  // }

  return (
    <main className="relative ">
      <div className="relative isolate overflow-hidden pt-14 h-28">
        {/* <Image
          alt="home hero"
          fill
          src={'/images/home/vecteezy_abstract.jpg'}
          // src={'/images/home/hero.webp'}
          className="absolute inset-0 -z-10 h-full w-full object-cover object-top opacity-20"
        /> */}
      </div>

      <div className="sticky top-0 bg-primary-50 z-20 py-4">
        <div className="max-w-7xl mx-auto px-5 flex justify-between items-center">
          <div>
            {q ? (
              <div>
                <div className="text-sm"> You are evaluvating conference</div>
                <div className="font-semibold">{q}</div>
              </div>
            ) : (
              <div>
                <div className="text-sm">Folowing is your checklist</div>
                <div className="font-semibold">
                  For better help include your conference name or website URL.
                </div>
              </div>
            )}
          </div>
          <TotalScore />
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 flex justify-between relative">
        <div className="max-w-2xl w-full" id="user_content">
          <GoogleSheetForm />
        </div>

        <div
          className="max-w-xs bg-primary-50 z-10 w-full p-5 h-[calc(100%-100px)]"
          id="bot_content"
        >
          Our bot is checking out the query you made.
          <GoogleSearch query={q} />
        </div>
      </div>
    </main>
  )
}

/* 

 <div
          className="max-w-xs bottom-0 fixed right-0 bg-primary-50 z-10 w-full p-5 h-[calc(100%-100px)]"
          id="bot_content"
        >
          Our bot is checking out the query you made.
        </div>

 <div className="max-w-7xl mx-auto pt-20 flex justify-between relative">
        <div>
          <div className="sticky top-0 ...">A</div>
          <div>
            <div>
              <strong>Andrew Alfred</strong>
            </div>
            <div>
              <strong>Aisha Houston</strong>
            </div>
          </div>
        </div>
        <div>
          <div className="sticky top-0">B</div>
          <div>
            <div>
              <div className="max-w-xl sticky top-0" id="bot_content">
                Our bot is checking out the query you made.
              </div>
            </div>
          </div>
        </div>
      </div>

*/
