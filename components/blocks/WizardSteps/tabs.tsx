import React from 'react'
import { classNames } from '../../../helpers/classNames'
import { CheckIcon } from '@heroicons/react/20/solid'
import { tinaField } from 'tinacms/dist/react'

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
      className="mb-8 py-2 sticky -top-1 bg-white z-20"
      id="validateTabs"
    >
      <ol
        role="list"
        className="flex items-center md:justify-center overflow-auto no-scrollbar"
      >
        {steps?.map((step: any, stepIdx: number) => (
          <li
            key={step.name}
            // data-tina-field={tinaField(step)}
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
                >
                  {/* <div className="h-0.5 w-full bg-primary-600" /> */}
                </div>
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
                  onClick={() => handleStepClick(stepIdx)} // Handle step click
                  className="relative flex items-center justify-center"
                  aria-current="step"
                >
                  <span className="text-xs bg-primary-600 px-4 py-2 rounded-md text-white font-bold">
                    {step.title}
                  </span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleStepClick(stepIdx)} // Handle step click
                  className="group relative flex items-center justify-center bg-white hover:border-primary-400"
                >
                  <span className="text-xs bg-primary-300 px-4 py-2 rounded-md text-gray-600 font-medium">
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
