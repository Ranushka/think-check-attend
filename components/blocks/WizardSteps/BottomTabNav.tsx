import React from 'react'
import Button from '../../../components/atoms/Button'
import useGlobal from '../../../context/globalContext'

export default function BottomTabNav({
  steps,
  currentStep,
  setCurrentStep,
}: any) {
  const { setGlobalState } = useGlobal()

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

  const handleRestart = () => {
    setCurrentStep(0)
  }

  const handleNewConfarnace = () => {
    setGlobalState({
      userAnswers: {},
    })
  }

  if (currentStep === steps.length) {
    return (
      <div className="flex justify-center sticky -bottom-1 bg-gray-100 rounded-md p-2">
        <Button variant="secondary" size="lg" onClick={handleRestart}>
          Restart validation
        </Button>
        <div className="w-8" />
        <Button variant="primary" size="lg" onClick={handleNewConfarnace}>
          Validate new confarnace
        </Button>
      </div>
    )
  }

  return (
    <div className="flex justify-between bg-gray-200 rounded-md p-2 items-center">
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
        <Button variant="primary" size="md" onClick={handleNext}>
          Next
        </Button>
      )}
    </div>
  )
}
