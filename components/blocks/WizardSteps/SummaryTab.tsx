import React from 'react'
import useGlobal from '../../../context/globalContext'
import TotalScore from './TotalScore'

const ScoreBreakdown = () => {
  const { state: globalState } = useGlobal()

  const cusMsg: any = {
    DISCOVERY: 'this is much positive oganic way is alwas better',
    ORGANISER:
      'Organization type and finding the phycical location is better in genaral',
    EVENT: 'Organized event is better',
    COSTS: 'Having a clear refund policy and discounts are alwas better',
    PAPERS: 'Publication is mager part of a confarnce',
    PROGRAMME:
      'Pland confarnce is better for the attendis and speaks for the serious ness of the organizers',
    PUBLICATION:
      'stating how they proseeding with papers publishd on the event is good',
  }

  const processData = () => {
    const { userAnswers } = globalState
    let output = []

    for (const section in userAnswers) {
      if (userAnswers.hasOwnProperty(section)) {
        const sectionAnswers = userAnswers[section]
        let sectionOutput: { section: string; messages: string[] } = {
          section,
          messages: [],
        }
        let foundCustomMessage = false // Flag to track if a custom message has been found

        for (const question in sectionAnswers) {
          if (sectionAnswers.hasOwnProperty(question)) {
            const answerItem = sectionAnswers[question]
            const answers = Array.isArray(answerItem)
              ? answerItem
              : [answerItem]

            answers.forEach((answer) => {
              const parts = answer.split('|')
              if (parts.length > 2 && parts[2]) {
                sectionOutput.messages.push(parts[2])
                foundCustomMessage = true // Custom message found
              }
            })
          }
        }

        if (!foundCustomMessage && cusMsg[section]) {
          sectionOutput.messages.push(cusMsg[section])
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
  const riskLevels = [
    { name: 'Critical Risk', color: '#B22222' },
    { name: 'High Risk', color: '#FF8C00' },
    { name: 'Moderate Risk', color: '#CCCC00' },
    { name: 'Low Risk', color: '#80800e' },
    { name: 'Minimal Risk', color: '#006400' },
  ]

  const gradientColors = riskLevels.map((risk) => risk.color).join(', ')

  return (
    <div className="flex justify-between items-center relative">
      {riskLevels.map((risk, index) => (
        <div
          key={index}
          style={{
            backgroundColor: risk.color,
            textShadow: 'rgb(0 0 0 / 60%) 1px 1px 2px',
          }}
          className="px-4 py-2 text-white text-xs lg:text-sm rounded-full relative z-10"
        >
          {risk.name}
        </div>
      ))}
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
