'use client'

import { getQualityStatus } from '../../../helpers/getQualityStatus'
import useGlobal from '../../../context/globalContext'

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
  const { name, message, color } = getQualityStatus(scoreIs)

  return (
    <div
      className="text-lg w-80 mt-8 p-5 rounded-lg text-center text-white"
      style={{ backgroundColor: color }}
    >
      Overol score
      <div className="text-7xl font-bold py-4">{scoreIs}</div>
      <div className="text-3xl font-bold py-2">{name}</div>
      <div className="text-sm">{message}</div>
    </div>
  )
}

type Feedback = {
  message: string
  color: string
}
