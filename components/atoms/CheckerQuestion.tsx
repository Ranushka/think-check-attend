'use client'

import useGlobal from '../../context/globalContext'
import React from 'react'

const CheckerQuestion = (props: any) => {
  const { question, answersList, isCheckbox, currentSteTitle } = props

  const { setGlobalState, state: globalState } = useGlobal()

  let userAnswersState = globalState.userAnswers

  const stepAnswers = userAnswersState[currentSteTitle] || {}

  if (!answersList || answersList.length === 0) {
    return <div>Please create some answers</div>
  }

  const handleAnswerChange = (answerText: any) => {
    const questionAnswers = isCheckbox
      ? stepAnswers[question] || []
      : answerText

    if (isCheckbox) {
      if (questionAnswers.includes(answerText)) {
        stepAnswers[question] = questionAnswers.filter(
          (item: any) => item !== answerText,
        )
      } else {
        stepAnswers[question] = [...questionAnswers, answerText]
      }
    } else {
      stepAnswers[question] = answerText
    }

    const updatedUserAnswers = {
      ...userAnswersState,
      [currentSteTitle]: stepAnswers,
    }

    setGlobalState({
      userAnswers: updatedUserAnswers,
    })
  }

  const renderOptions = (
    id: string,
    question: string,
    currentSteTitle: string,
  ) => {
    return answersList.map((answerOption: any, i: number) => {
      const answerOptionData = answerOption.split('|')
      const answerText = answerOptionData?.[0]

      return (
        <div key={i} className="mx-2 my-1">
          {isCheckbox ? (
            <label className="cursor-pointer">
              <input
                className="mr-2 text-primary-600 border-primary-200 focus:ring-primary-300"
                type="checkbox"
                value={answerOption}
                name={id}
                checked={stepAnswers[question]?.includes(answerOption)}
                onChange={() => handleAnswerChange(answerOption)}
              />
              {answerText}
            </label>
          ) : (
            <label className="cursor-pointer">
              <input
                className="mr-2 text-primary-600 border-primary-200 focus:ring-primary-3"
                type="radio"
                value={answerOption}
                name={id}
                checked={stepAnswers[question]?.includes(answerOption)}
                onChange={() => handleAnswerChange(answerOption)}
              />
              {answerText}
            </label>
          )}
        </div>
      )
    })
  }

  const qId = getId(question)

  return (
    <div className="p-4 bg-gray-50 rounded-xl mb-4">
      <p className="text-lg mb-2">{question}</p>
      {renderOptions(qId, question, currentSteTitle)}
    </div>
  )
}

function getId(text: string) {
  return text.replace(/[^a-zA-Z0-9]+/g, '_')
}

export default CheckerQuestion
