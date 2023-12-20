import React, { useContext } from 'react'
import Button from '../../../components/atoms/Button'
import useGlobal from '../../../context/globalContext'

export default function BottomTabNav({
  steps,
  currentStep,
  setCurrentStep,
}: any) {
  const { state: globalState, setGlobalState } = useGlobal()

  const isCurrentStepComplete = () => {
    const currentStepAnswers =
      globalState.userAnswers[steps[currentStep]?.title]
    const currentStepQuestion = steps[currentStep].blocks.filter(
      (item: any) => item.question,
    )
    const allQuestionsAnswered = currentStepQuestion.every((item: any) => {
      return currentStepAnswers?.[item.question] !== undefined
    })

    return allQuestionsAnswered
  }

  const isEditorMode = () => {
    const isEditing = localStorage.getItem('tina.isEditing')

    console.log('ssss', isEditing, !!isEditing)

    return !!isEditing
  }

  const handleNext = () => {
    console.log('isCurrentStepComplete -->', isCurrentStepComplete())

    if (!isCurrentStepComplete() && !isEditorMode()) {
      alert('Please anser the all questions')
      return
    }

    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleSkip = () => {
    setCurrentStep(currentStep + 1)
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
    setCurrentStep(0)
    localStorage.clear()
    window.location.reload()
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
    <div
      className="flex justify-between bg-gray-200 rounded-md p-2 items-center sticky bottom-0"
      style={{
        backdropFilter: 'blur(8px)',
        background: '#7a7a7a24',
      }}
    >
      <Button
        variant="secondary"
        size="md"
        onClick={handleBack}
        className={!(currentStep > 0) ? 'opacity-20 pointer-events-none' : ''}
      >
        Back
      </Button>

      {steps[currentStep]?.skip && (
        <Button
          variant="secondary"
          size="md"
          onClick={handleSkip}
          className="ml-auto mr-4"
        >
          Skip section
        </Button>
      )}

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
