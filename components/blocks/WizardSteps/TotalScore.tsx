'use client'

import useGlobal from '../../../context/globalContext'
import { classNames } from '../../../helpers/classNames'

const calculateFinalCount = (userAnswers: any) => {
  let totalScore = 0

  // Iterate through each step
  for (const step in userAnswers) {
    if (userAnswers.hasOwnProperty(step)) {
      const stepAnswers = userAnswers[step]

      // Iterate through answers in each step
      for (const question in stepAnswers) {
        if (stepAnswers.hasOwnProperty(question)) {
          const answerItem = stepAnswers[question]

          // Check if it is a multi-choice (array) or single choice
          if (Array.isArray(answerItem)) {
            answerItem.forEach((choice: any) => {
              const itmScore = choice.split('|')?.[1] || 0
              totalScore += parseInt(itmScore)
            })
          } else if (answerItem) {
            const itmScore = answerItem.split('|')?.[1] || 0
            totalScore += parseInt(itmScore)
          }
        }
      }
    }
  }

  return totalScore
}

export default function TotalScore() {
  const {
    state: { scoreCard, userAnswers },
  } = useGlobal()

  const scoreIs = calculateFinalCount(userAnswers)
  const { message, color } = getQualityStatus(scoreIs)

  let scoreColorClass

  if (scoreIs > 20) {
    scoreColorClass = 'text-usp-attend'
  } else if (scoreIs > 10) {
    scoreColorClass = 'text-usp-check'
  } else {
    scoreColorClass = 'text-usp-think'
  }

  return (
    <div
      className="text-lg w-80 mt-8 p-5 rounded-lg text-center text-white"
      style={{ backgroundColor: color }}
    >
      Overol score
      <div className={classNames('pl-2 text-7xl font-bold')}>{scoreIs}</div>
      <div className="text-sm">{message}</div>
    </div>
  )
}

type Feedback = {
  message: string
  color: string
}

function getQualityStatus(score: number): Feedback {
  if (score >= 85) {
    return { message: 'Quality', color: '#006400' }
  } else if (score >= 65) {
    return { message: 'Questionable quality', color: '#FF8C00' }
  } else if (score >= 45) {
    return { message: 'Promising low-quality', color: '#CCCC00' }
  } else if (score >= 25) {
    return { message: 'Low-quality', color: '#80800e' }
  } else {
    return { message: 'High risk of prdotory confarance', color: '#B22222' }
  }
}
