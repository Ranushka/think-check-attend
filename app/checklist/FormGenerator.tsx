'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

import useGlobal from '../../context/globalContext'
import { classNames } from '../../helpers/classNames'
import React, { useEffect } from 'react'
import QnaItem from './QnaItem'

const DipQuestionsJen = ({ questions }: any) => {
  return (
    <div>
      {questions.map((qItem: any, index: number) => {
        const { DEPENDENT_QUESTION, DEPENDENT_ANSWERS, SCORE, ID, IS_MULTI } =
          qItem

        return (
          <QnaItem
            ID={ID}
            key={index}
            score={SCORE}
            question={DEPENDENT_QUESTION}
            answer={DEPENDENT_ANSWERS}
            IS_MULTI={IS_MULTI}
          />
        )
      })}
    </div>
  )
}

const QuestionsJen = ({ questions }: any) => {
  const {
    state: { userAnswers },
  } = useGlobal()

  return (
    <div className="pt-4">
      {questions.map((qItem: any, index: number) => {
        const {
          QUESTION,
          ANSWERS,
          TRIGGER,
          DEPENDENT_QUESTIONS,
          SCORE,
          NUMBER,
          ID,
          IS_MULTI,
        } = qItem

        const showSubQuestions = userAnswers[ID]?.answer === TRIGGER

        return (
          <div key={index}>
            <QnaItem
              ID={ID}
              question={QUESTION}
              answer={ANSWERS.ANSWER}
              score={SCORE}
              number={NUMBER}
              DEPENDENT_QUESTIONS={DEPENDENT_QUESTIONS}
              IS_MULTI={IS_MULTI}
            />

            {/* {JSON.stringify(userAnswers[ID]?.answer)} */}

            {DEPENDENT_QUESTIONS.length !== 0 && (
              <div
                className={classNames(
                  'overflow-hidden duration-200 transition-max-h -mt-6',
                  showSubQuestions
                    ? 'max-h-screen ease-in-out'
                    : 'max-h-0 ease-in-out',
                )}
              >
                <div className="border-l-2 border-gray-200 pt-4 ml-8">
                  <DipQuestionsJen questions={DEPENDENT_QUESTIONS} />
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

const SectionsJen = ({ items }: any) => {
  return (
    <div className="pl-4">
      {items.map((item: any, index: number) => {
        const sectionTitleInfo = item?.SECTION.split('|')

        return (
          <Disclosure as="div" key={index} className="p-6 pr-0 pb-0">
            {({ open }) => (
              <div>
                <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900 border-b">
                  <div className="mb-4">
                    <h3 className="text-xl text-gray-500 font-semibold font-serif">
                      {sectionTitleInfo[0]}
                    </h3>
                  </div>
                  <span className="ml-6 flex h-7 items-center">
                    {open ? (
                      <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </Disclosure.Button>

                <Disclosure.Panel as="div" className="mt-2 pr-12">
                  <p className="text-gray-500 text-sm">{sectionTitleInfo[1]}</p>
                  <QuestionsJen questions={item.QUESTIONS} />
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        )
      })}
    </div>
  )
}

const FormGenerator = ({ formatedData }: any) => {
  const {
    state: { userAnswers, workingTab },
    setGlobalState,
  } = useGlobal()

  return (
    <div className="p-8 pt-0">
      {formatedData.map((item: any, index: number) => {
        const categoryTitleData = item.CATEGORY.split('|')
        const formattedIndex = (index + 1).toString().padStart(2, '0')
        const handleDisclosureOpen = () => {
          setGlobalState({ workingTab: index })
        }

        return (
          <Disclosure as="div" key={index} className="pt-6 pb-4">
            {({ open }) => (
              <div>
                <div
                  className="sticky top-0 bg-white z-10"
                  style={{ backdropFilter: 'blur(8px)' }}
                >
                  <Disclosure.Button
                    onClick={handleDisclosureOpen}
                    className="flex w-full items-start justify-between text-left text-gray-900 stickyTitle"
                  >
                    <div className="flex items-center">
                      <span className="text-gray-300 mr-2 text-xl -ml-6">
                        {formattedIndex}
                      </span>
                      <h2 className="text-2xl text-gray-600">
                        {categoryTitleData[0]}
                      </h2>
                    </div>
                    <span className="ml-6 flex h-7 items-center">
                      {open ? (
                        <MinusSmallIcon
                          className="h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </span>
                  </Disclosure.Button>
                </div>
                <Disclosure.Panel as="dd" className="mt-2">
                  <p className="text-gray-500 text-sm pl-2">
                    {categoryTitleData[1]}
                  </p>
                  <SectionsJen items={item.SECTIONS} />
                </Disclosure.Panel>
              </div>
            )}
          </Disclosure>
        )
      })}
    </div>
  )
}

export default FormGenerator
