import React from 'react'
import useGlobal from '../../../context/globalContext'
import TotalScore from './TotalScore'

const ScoreBreakdown = () => {
  const { setGlobalState, state: globalState } = useGlobal()

  return (
    <div className="px-4 py-2 w-full overflow-auto">
      <pre>{JSON.stringify(globalState.userAnswers, undefined, 2)}</pre>
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
          className="px-4 py-2 text-white text-xs lg:text-sm rounded-lg relative z-10"
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
