import React from 'react'
import { classNames } from '../../../helpers/classNames'
import { CheckIcon } from '@heroicons/react/20/solid'
import { tinaField } from 'tinacms/dist/react'
import Button from '../../../components/atoms/Button'

export default function BottomTabNav({
  steps,
  currentStep,
  setCurrentStep,
}: any) {
  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (currentStep === steps.length) {
    return (
      <div className="flex justify-center sticky -bottom-1 bg-primary-50 rounded-md p-2">
        <Button variant="primary" size="lg" onClick={() => setCurrentStep(0)}>
          Restart the journy
        </Button>
      </div>
    )
  }

  return (
    <div className="flex justify-between sticky -bottom-1 bg-primary-50 rounded-md p-2 items-center">
      <Button
        variant="secondary"
        size="md"
        onClick={handleBack}
        className={!(currentStep > 0) ? 'opacity-20 pointer-events-none' : ''}
      >
        Back
      </Button>

      {currentStep >= steps.length - 1 ? (
        <Button variant="primary" size="lg" onClick={handleNext}>
          Show Results
        </Button>
      ) : (
        <Button variant="secondary" size="md" onClick={handleNext}>
          Next
        </Button>
      )}
    </div>
  )
}
