import React from 'react'
import useGlobal from '../../../context/globalContext'
import TotalScore from './TotalScore'
import { getQualityStatus } from '../../../helpers/getQualityStatus'

const cusMsg: any = {
  DISCOVERY: {
    20: 'Discovery section has a positive score.',
    10: 'Discovery section has a neutral score.',
    5: 'Discovery section has a negative score.',
    0: 'Discovery section has a negative score.',
  },
  ORGANISER: {
    4: 'Organiser section has a positive score.',
    2: 'Organiser section has a neutral score.',
    1: 'Organiser section has a negative score.',
    0: 'Organiser section has a negative score.',
  },
  COSTS: {
    4: 'Cost section has a positive score.',
    2: 'Cost section has a neutral score.',
    1: 'Cost section has a negative score.',
    0: 'Cost section has a negative score.',
  },
  PAPERS: {
    4: 'Papers section has a positive score.',
    2: 'Papers section has a neutral score.',
    1: 'Papers section has a negative score.',
    0: 'Papers section has a negative score.',
  },
  EVENT: {
    4: 'Event section has a positive score.',
    2: 'Event section has a neutral score.',
    1: 'Event section has a negative score.',
    0: 'Event section has a negative score.',
  },
  PROGRAMME: {
    4: 'Program section has a positive score.',
    2: 'Program section has a neutral score.',
    1: 'Program section has a negative score.',
    0: 'Program section has a negative score.',
  },
  PUBLICATION: {
    4: 'Publication section has a positive score.',
    2: 'Publication section has a neutral score.',
    1: 'Publication section has a negative score.',
    0: 'Publication section has a negative score.',
  },
}

const getScoreMessage = (section: string, totalScore: number) => {
  const scoreThresholds = cusMsg[section]
  if (!scoreThresholds) return null

  // Find the appropriate message based on score
  let selectedMessage = null
  const sortedScores = Object.keys(scoreThresholds).sort(
    (a, b) => parseInt(b) - parseInt(a),
  )
  for (const score of sortedScores) {
    if (totalScore >= parseInt(score)) {
      selectedMessage = scoreThresholds[score]
      break // Exit loop once the appropriate score is found
    }
  }
  return selectedMessage
}

const ScoreBreakdown = () => {
  const { state: globalState } = useGlobal()

  const processData = () => {
    const { userAnswers } = globalState
    let output = []

    for (const section in userAnswers) {
      if (userAnswers.hasOwnProperty(section)) {
        const sectionAnswers = userAnswers[section]
        let sectionOutput = { section, messages: [], totalScore: 0 }

        for (const question in sectionAnswers) {
          if (sectionAnswers.hasOwnProperty(question)) {
            const answerItem = sectionAnswers[question]
            const answers = Array.isArray(answerItem)
              ? answerItem
              : [answerItem]

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

  const processedData = processData()

  return (
    <div className="p-4 w-full">
      {/* <pre>{JSON.stringify(globalState.userAnswers, undefined, 2)}</pre> */}
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

const RiskLevels = () => {
  const riskLevels = [85, 65, 45, 25, 24]

  const gradientColors = riskLevels
    .map((risk) => {
      const { color } = getQualityStatus(risk)
      return color
    })
    .join(', ')

  return (
    <div className="flex justify-between items-center relative">
      {riskLevels.map((risk, index) => {
        // getQualityStatus()

        const { name, color } = getQualityStatus(risk)

        return (
          <div
            key={index}
            style={{
              backgroundColor: color,
              textShadow: 'rgb(0 0 0 / 60%) 1px 1px 2px',
            }}
            className="px-4 py-2 text-white text-xs lg:text-sm rounded-full relative z-10"
          >
            {name}
          </div>
        )
      })}
      <div
        className="w-full h-1 absolute z-0 bg-gradient-to-r"
        style={{ background: `linear-gradient(to right, ${gradientColors})` }}
      ></div>
    </div>
  )
}

export function SummaryTab() {
  return (
    <section className="bg-gray-50 p-4 my-10 rounded-lg">
      <h2 className="text-3xl pb-8 ">Summary</h2>
      <p className="mb-4 text-gray-600">
        This is just a evaluater tool to mitigate prodtoary confarnce. All is
        detamind by the infomation that you provide and the infomation that can
        be found online, That being said folowing is our scale risk of
        attending.
      </p>
      <RiskLevels />
      <div className="flex">
        <ScoreBreakdown />
        <TotalScore />
      </div>
    </section>
  )
}

export default SummaryTab
