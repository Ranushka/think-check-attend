import React from 'react'
import useGlobal from '../../../context/globalContext'

const getOverallMessages = (steps: any) => {
  const resultObject: Record<string, Record<any, string>> = {}

  steps.forEach((item: { title: string; scoreBreakDown: string[] }) => {
    const { title, scoreBreakDown } = item
    const titleObject: Record<any, string> = {}

    scoreBreakDown?.forEach((scoreItem: string) => {
      const [score, message] = scoreItem.split('|')
      titleObject[score] = message.trim()
    })

    resultObject[title] = titleObject
  })

  return resultObject
}

const getScoreMessage = (
  overallMessages: any,
  section: string,
  totalScore: number,
) => {
  const scoreThresholds = overallMessages[section]
  if (!scoreThresholds) return null

  let selectedMessage = null
  const sortedScores = Object.keys(scoreThresholds).sort(
    (a, b) => parseInt(b) - parseInt(a),
  )
  for (const score of sortedScores) {
    if (totalScore >= parseInt(score)) {
      selectedMessage = scoreThresholds[score]
      break
    }
  }
  return selectedMessage
}

const processData = (steps: any, globalState: any) => {
  const overallMessages = getOverallMessages(steps)
  const { userAnswers } = globalState
  let output = []

  for (const section in userAnswers) {
    if (userAnswers.hasOwnProperty(section)) {
      const sectionAnswers = userAnswers[section]
      let sectionOutput = { section, messages: [], totalScore: 0 }

      for (const question in sectionAnswers) {
        if (sectionAnswers.hasOwnProperty(question)) {
          const answerItem = sectionAnswers[question]
          const answers = Array.isArray(answerItem) ? answerItem : [answerItem]

          answers.forEach((answer) => {
            const parts = answer.split('|')
            const score = parts.length > 1 ? parseInt(parts[1], 10) || 0 : 0
            sectionOutput.totalScore += score

            if (parts.length > 2 && parts[2]) {
              const msg = parts[2] as never
              sectionOutput.messages.push(msg)
            }
          })
        }
      }

      // Get score message
      const scoreMessage = getScoreMessage(
        overallMessages,
        section,
        sectionOutput.totalScore,
      ) as never

      if (scoreMessage) {
        sectionOutput.messages.push(scoreMessage)
      }

      output.push(sectionOutput)
    }
  }

  return output
}

const ScoreBreakdown = ({ steps }: any) => {
  const { state: globalState } = useGlobal()
  const processedData = processData(steps, globalState)

  return (
    <div className="p-4 w-full">
      <h3 className="text-xl mb-4 mt-8">Folowing is your break down</h3>

      {processedData.map((section, index) => (
        <div key={index} className="mb-6">
          <h4 className="text-md">{section.section}</h4>
          <ul className="list-disc pl-5">
            {section.messages.map((message, msgIndex) => (
              <li key={msgIndex} className="text-gray-600 mb-1">
                {message}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default ScoreBreakdown
