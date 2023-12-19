import React from 'react'
import { classNames } from '../../../helpers/classNames'
import { PaperAirplaneIcon } from '@heroicons/react/20/solid'
import { tinaField } from 'tinacms/dist/react'

export default function StepIndicator({
  steps,
  currentStep, // setCurrentStep,
}: any) {
  return (
    <nav
      aria-label="Progress"
      className="mb-8 pt-2 sticky top-0 bg-white z-20 border-b border-primary-600"
      id="validateTabs"
      data-tina-field={tinaField(steps)}
    >
      <ol
        role="list"
        className="flex items-center md:justify-between overflow-auto no-scrollbar pb-4 -mb-8"
      >
        {/* <li className="absolute -top-8 left-0">Start validation</li> */}
        {steps?.map((step: any, stepIdx: number) => (
          <li
            key={stepIdx + 1}
            className={classNames(
              'relative pt-8',
              stepIdx !== steps.length - 1 ? 'mr-8' : '',
            )}
          >
            {currentStep === stepIdx ? (
              <button
                // onClick={() => setCurrentStep(stepIdx)} // Uncomment if needed
                className="relative flex items-center justify-center pointer-events-none"
                aria-current="step"
              >
                <div className="text-xs px-4 py-2 rounded-md text-white font-bold bg-primary-600">
                  <span className="text-sm absolute -top-4 bg-primary-600 rounded-full px-2 py-1 left-1/2 transform -translate-x-1/2">
                    {stepIdx + 1}
                  </span>
                  <div className="text-sm">{step.title}</div>
                </div>
                <PaperAirplaneIcon
                  className="h-5 w-5 text-primary-600 absolute -bottom-2 rotate-90"
                  aria-hidden="true"
                />
              </button>
            ) : (
              <button
                // onClick={() => setCurrentStep(stepIdx)} // Uncomment if needed
                className="group relative flex items-center justify-center bg-primary-50 rounded-md pointer-events-none"
              >
                <div className="text-xs px-4 py-2 text-gray-600">
                  <span className="text-sm absolute bg-primary-50 -top-4 rounded-full px-2 py-1 left-1/2 transform -translate-x-1/2">
                    {stepIdx + 1}
                  </span>
                  <div className="text-sm">{step.title}</div>
                </div>
              </button>
            )}
          </li>
        ))}
        {/* <li className="absolute -top-8 right-0">Validation summary</li> */}
      </ol>
    </nav>
  )
}
