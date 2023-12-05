import React from 'react'
import { classNames } from '../../../helpers/classNames'
import { CheckIcon, PaperAirplaneIcon } from '@heroicons/react/20/solid'

export default function StepIndicator({
  steps,
  currentStep,
  setCurrentStep,
}: any) {
  const handleStepClick = (stepIdx: number) => {
    setCurrentStep(stepIdx)
  }

  return (
    <nav
      aria-label="Progress"
      className="mb-8 pt-2 sticky top-0 bg-white z-20 border-b border-primary-600"
      id="validateTabs"
    >
      <ol
        role="list"
        className="flex items-center md:justify-center overflow-auto no-scrollbar pb-4"
      >
        {steps?.map((step: any, stepIdx: number) => (
          <li
            key={stepIdx}
            className={classNames(
              stepIdx !== steps.length - 1 ? 'pr-8' : '',
              'relative',
            )}
          >
            {step.status === 'complete' ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                ></div>
                <button
                  onClick={() => handleStepClick(stepIdx)}
                  className="relative flex items-center justify-center"
                >
                  <CheckIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  <span className="text-sm bg-primary-200 ">{step.name}</span>
                </button>
              </>
            ) : currentStep === stepIdx ? (
              <>
                <button
                  onClick={() => handleStepClick(stepIdx)}
                  className="relative flex items-center justify-center"
                  aria-current="step"
                >
                  <span className="text-xs bg-primary-600 px-4 py-2 rounded-md text-white font-bold">
                    {step.title}
                  </span>
                  <PaperAirplaneIcon
                    className="h-5 w-5 text-primary-600 absolute -bottom-3 rotate-90"
                    aria-hidden="true"
                  />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleStepClick(stepIdx)}
                  className="group relative flex items-center justify-center"
                >
                  <span className="text-xs border border-primary-200 px-4 py-2 rounded-md text-gray-600 hover:bg-primary-50 font-medium">
                    {step.title}
                  </span>
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
