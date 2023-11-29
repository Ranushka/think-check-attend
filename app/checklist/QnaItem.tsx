import useGlobal from '../../context/globalContext'
import { classNames } from '../../helpers/classNames'
import React, { useEffect, useReducer } from 'react'
import { answerReducer } from '@/helpers/answerReducer'

interface AnswerAction {
  type: 'SET_SINGLE_ANSWER' | 'ADD_MULTIPLE_CHOICE' | 'REMOVE_MULTIPLE_CHOICE'
  questionId: string
  answer: string
  score: number
}

const QnaItem = ({
  ID,
  question,
  answer,
  score,
  DEPENDENT_QUESTIONS,
  IS_MULTI,
}: any) => {
  const [userAnswers, dispatch] = useReducer(answerReducer, {})
  const { setGlobalState, state: globalState } = useGlobal()
  const type = IS_MULTI ? 'checkbox' : 'radio'

  const handleAnswerChange = (
    questionId: any,
    optItem: any,
    ansScore: any,
    checked: any,
  ) => {
    let actionType: AnswerAction['type']
    if (IS_MULTI) {
      actionType = checked ? 'ADD_MULTIPLE_CHOICE' : 'REMOVE_MULTIPLE_CHOICE'
    } else {
      actionType = 'SET_SINGLE_ANSWER'
    }

    dispatch({ type: actionType, questionId, answer: optItem, score: ansScore })

    let updatedGlobalAnswers = globalState.userAnswers

    if (IS_MULTI) {
      const existingChoices =
        updatedGlobalAnswers[questionId]?.multipleChoice || []
      const choice = { answer: optItem, score: ansScore }

      if (checked) {
        updatedGlobalAnswers = {
          ...updatedGlobalAnswers,
          [questionId]: { multipleChoice: [...existingChoices, choice] },
        }
      } else {
        updatedGlobalAnswers = {
          ...updatedGlobalAnswers,
          [questionId]: {
            multipleChoice: existingChoices.filter(
              (existingChoice: any) => existingChoice.answer !== optItem,
            ),
          },
        }
      }
    } else {
      updatedGlobalAnswers = {
        ...updatedGlobalAnswers,
        [questionId]: { answer: optItem, score: ansScore },
      }
    }

    setGlobalState({ ...globalState, userAnswers: updatedGlobalAnswers })
  }

  if (!answer) return <></>

  return (
    <div className={'text-base mb-10 pl-4'}>
      <p className="mb-2 text-gray-700">{question}</p>

      <div className={answer.length < 3 ? 'flex flex-wrap' : ''}>
        {answer.map((optItem: true, answerIndex: number) => {
          let isSelected = false

          if (type === 'checkbox') {
            isSelected = !!globalState.userAnswers[ID]?.multipleChoice.some(
              (choice: any) => choice.answer === optItem,
            )
          } else {
            isSelected = globalState.userAnswers[ID]?.answer === optItem
          }

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
                type={type}
                onChange={(e) =>
                  handleAnswerChange(ID, optItem, ansScore, e.target.checked)
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
