import useGlobal from '@/context/globalContext'
import { classNames } from '@/helpers/classNames'
import React from 'react'

const QnaItem = ({ question, answer }: any) => {
  const {
    setGlobalState,
    state: { userAnswers },
  } = useGlobal()

  const handleAnswerChange = (question: any, answer: any) => {
    setGlobalState({
      userAnswers: {
        ...userAnswers,
        [question]: answer,
      },
    })

    console.log('userAnswers--->>', userAnswers)
  }

  if (!answer) return <></>

  return (
    <div className={'text-base mb-10 pl-4'}>
      <p className="mb-2 text-gray-700">{question}</p>

      <div className={answer.length < 3 ? 'flex flex-wrap' : ''}>
        {answer.map((optItem: any, answerIndex: number) => {
          const isSelected = userAnswers[question] === optItem

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
                onChange={() => handleAnswerChange(question, optItem)}
                defaultChecked={isSelected}
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
