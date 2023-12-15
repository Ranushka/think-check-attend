'use client'

import React, { useState, useEffect } from 'react'
import CheckerQuestionSchema from './schema'
import AnswerOptions from './AnswerOptions'
import AnswerTips from './AnswerTips'
import useGlobal from '../../../context/globalContext'

const CheckerQuestion = (props: any) => {
  const { question, answersList, isCheckbox } = props.data
  const { setGlobalState, state: globalState } = useGlobal()
  const { userAnswers, currentSteTitle } = globalState
  const currentTabUserAnswersState = userAnswers[currentSteTitle] || {}

  const handleAnswerChange = (
    answerText: any,
    answerPoints: any,
    answerTip: any,
  ) => {
    let questionAnswers = isCheckbox
      ? currentTabUserAnswersState[question] || []
      : [answerText]

    if (isCheckbox) {
      questionAnswers = questionAnswers.includes(answerText)
        ? questionAnswers.filter((item: any) => item !== answerText)
        : [...questionAnswers, answerText]
    }

    setGlobalState({
      userAnswers: {
        ...userAnswers,
        [currentSteTitle]: {
          ...currentTabUserAnswersState,
          [question]: questionAnswers,
        },
      },
    })
  }

  if (!answersList || answersList.length === 0) {
    return <div>Please create some answers</div>
  }

  return (
    <div className="p-4 bg-gray-50 rounded-xl mb-4 relative">
      <p className="text-lg mb-2">{question}</p>

      <AnswerOptions
        answersList={answersList}
        stepAnswers={currentTabUserAnswersState}
        question={question}
        isCheckbox={isCheckbox}
        handleAnswerChange={handleAnswerChange}
      />

      <AnswerTips
        answersList={answersList}
        question={question}
        currentTabUserAnswersState={currentTabUserAnswersState}
      />
    </div>
  )
}

export default CheckerQuestion
export { CheckerQuestionSchema }
