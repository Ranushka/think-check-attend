import React from 'react'
import { classNames } from '../../../helpers/classNames'

interface AnswerTipsProps {
  answersList: any[]
  question: any
  currentTabUserAnswersState: any
}

const AnswerTips: React.FC<AnswerTipsProps> = ({
  answersList,
  question,
  currentTabUserAnswersState,
}) => {
  const tipItems = answersList
    .filter((answerOption) => {
      const [answerText, , tip] = answerOption.split('|')
      const checked = currentTabUserAnswersState[question]?.includes(answerText)
      return checked && tip
    })
    .map((answerOption) => {
      const tip = answerOption.split('|')[2].trim()
      const points = parseInt(answerOption.split('|')[1].trim())
      return { tip, points }
    })

  if (tipItems.length === 0) {
    return null
  }

  return (
    <div>
      {tipItems.map((item, index) => (
        <div
          key={index}
          className={classNames(
            'mt-2 px-4 py-2 rounded-lg inline-block font-semibold',
            // item.tip && 'animated tada',
            getColorClass(item.points),
          )}
        >
          <div className="color-text-with-bg">{item.tip}</div>
        </div>
      ))}
    </div>
  )
}

const getColorClass = (points: number) => {
  if (points > 0) return 'bg-green-50'
  if (points === 0) return 'bg-[#e7e0a7]' // Light yellow color
  return 'bg-[#f2d3d2]' // Pink color
}

export default AnswerTips
