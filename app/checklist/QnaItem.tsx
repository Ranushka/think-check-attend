import useGlobal from '@/context/globalContext'
import { classNames } from '../../helpers/classNames'
import React, { useEffect } from 'react'

const QnaItem = ({ ID, question, answer, score, DEPENDENT_QUESTIONS }: any) => {
  const {
    setGlobalState,
    state: { userAnswers, finalScore },
  } = useGlobal()

  // useEffect(() => {}, [userAnswers])

  const handleAnswerChange = (
    ID: any,
    DEPENDENT_QUESTIONS: any,
    answer: any,
    score: any,
  ) => {
    console.log('DEPENDENT_QUESTIONS--->', DEPENDENT_QUESTIONS)
    const resetAns: any = {}

    if (DEPENDENT_QUESTIONS) {
      DEPENDENT_QUESTIONS.map((item: any) => {
        resetAns[item.ID] = null
      })
    }

    const updatedAnswers = {
      ...userAnswers,
      ...resetAns,
      [ID]: { a: answer, s: score },
    }

    setGlobalState({
      finalScore: finalScore + parseInt(score),
      userAnswers: updatedAnswers,
    })

    try {
      localStorage.setItem('userAnswers', JSON.stringify(updatedAnswers))
    } catch (error) {
      console.log('Error parsing userAnswers from localStorage:', error)
    }
  }

  if (!answer) return <></>

  return (
    <div className={'text-base mb-10 pl-4'}>
      <p className="mb-2 text-gray-700">{question}</p>

      <div className={answer.length < 3 ? 'flex flex-wrap' : ''}>
        {answer.map((optItem: any, answerIndex: number) => {
          const isSelected = userAnswers[ID]?.a === optItem
          const ansScore = score[answerIndex]

          return (
            <label
              key={answerIndex}
              className={classNames(
                'rounded-md mr-4 mb-2 text-center cursor-pointer flex items-center',
                'min-w-[60px] inline-block capitalize text-gray-500',
              )}
            >
              <input
                name={question}
                value={optItem}
                type="radio"
                onChange={() =>
                  handleAnswerChange(ID, DEPENDENT_QUESTIONS, optItem, ansScore)
                }
                checked={isSelected}
                className="h-4 w-4 mr-2 border-2 border-primary text-primary-600 focus:ring-primary-600 cursor-pointer"
              />
              <div>{optItem}</div>
            </label>
          )
        })}
      </div>
    </div>
  )
}

export default QnaItem
