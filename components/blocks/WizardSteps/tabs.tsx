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
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center justify-center">
        {steps?.map((step: any, stepIdx: number) => (
          <li
            key={step.name}
            // data-tina-field={tinaField(step)}
            className={classNames(
              stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
              'relative',
            )}
          >
            {step.status === 'complete' ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-primary-600" />
                </div>
                <button
                  onClick={() => handleStepClick(stepIdx)} // Handle step click
                  className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary-600 hover:bg-primary-900"
                >
                  <CheckIcon
                    className="h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </button>
              </>
            ) : currentStep === stepIdx ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <button
                  onClick={() => handleStepClick(stepIdx)} // Handle step click
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-600 bg-white"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-primary-600"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </button>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-gray-200" />
                </div>
                <button
                  onClick={() => handleStepClick(stepIdx)} // Handle step click
                  className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white hover:border-gray-400"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"
                    aria-hidden="true"
                  />
                  <span className="sr-only">{step.name}</span>
                </button>
              </>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
