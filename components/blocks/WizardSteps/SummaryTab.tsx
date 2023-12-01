import React from 'react'
import TotalScore from './TotalScore'
import { getQualityStatus } from '../../../helpers/getQualityStatus'
import ScoreBreakdown from './ScoreBreakdown'

const RiskLevels = () => {
  const riskLevels = [85, 65, 45, 25, 24]

  const gradientColors = riskLevels
    .map((risk) => {
      const { color } = getQualityStatus(risk)
      return color
    })
    .join(', ')

  return (
    <div className="flex justify-between items-center relative mb-4">
      {riskLevels.map((risk, index) => {
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

export function SummaryTab({ steps }: any) {
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
        <ScoreBreakdown steps={steps} />
        <TotalScore />
      </div>
    </section>
  )
}

export default SummaryTab
