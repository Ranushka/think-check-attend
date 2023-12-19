import React from 'react'

const AnswerOptions = ({
  answersList,
  stepAnswers,
  question,
  isCheckbox,
  handleAnswerChange,
}: any) => {
  return answersList.map((answerOption: any, i: number) => {
    const [answerText, answerPoints, answerTip] = answerOption.split('|')
    const answerWithPoints = `${answerText}|${answerPoints}`
    const checked = stepAnswers[question]?.includes(answerWithPoints) || false

    return (
      <div key={answerText} className="mx-2 my-1">
        {isCheckbox ? (
          <label className="cursor-pointer">
            <input
              className="mr-2 text-primary-600 border-primary-200 focus:ring-primary-300 cursor-pointer"
              type="checkbox"
              value={answerText}
              name={question}
              checked={checked}
              onChange={() =>
                handleAnswerChange(answerText, answerPoints, answerTip)
              }
            />
            {answerText}
          </label>
        ) : (
          <label className="cursor-pointer">
            <input
              className="mr-2 text-primary-600 border-primary-200 focus:ring-primary-3 cursor-pointer"
              type="radio"
              value={answerText}
              name={question}
              checked={checked}
              onChange={() =>
                handleAnswerChange(answerText, answerPoints, answerTip)
              }
            />
            {answerText}
          </label>
        )}
      </div>
    )
  })
}

export default AnswerOptions
