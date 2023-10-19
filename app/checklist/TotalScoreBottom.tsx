'use client'

import useGlobal from '@/context/globalContext'
import { classNames } from '../helpers/classNames'

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

export default function TotalScoreBottom({ searchParams }: any) {
  const q = searchParams?.q

  const { state } = useGlobal()

  // const scoreIs = calculateFinalCount(scoreCard)

  let scoreColorClass

  // if (parseInt(scoreIs) > 2) {
  //   scoreColorClass = 'text-usp-attend'
  // } else if (parseInt(scoreIs) > 1) {
  //   scoreColorClass = 'text-usp-check'
  // } else {
  //   scoreColorClass = 'text-usp-think'
  // }

  return (
    <div className="text-lg">
      {/* Total Score: */}
      <span className={classNames('pl-2 font-black text-2xl', scoreColorClass)}>
        {JSON.stringify(state)}
        {/* {scoreIs} */}
      </span>
    </div>
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
