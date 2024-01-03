import React, { useContext } from 'react'
import Button from '../../../components/atoms/Button'
import useGlobal from '../../../context/globalContext'

export default function BottomTabNav({
  steps,
  currentStep,
  setCurrentStep,
}: any) {
  const { state: globalState, setGlobalState } = useGlobal()

  // const isCurrentStepComplete = () => {
  //   const currentStepAnswers =
  //     globalState.userAnswers[steps[currentStep]?.title]
  //   const currentStepQuestion = steps[currentStep].blocks.filter(
  //     (item: any) => item.question,
  //   )
  //   const allQuestionsAnswered = currentStepQuestion.every((item: any) => {
  //     return currentStepAnswers?.[item.question] !== undefined
  //   })

  //   return allQuestionsAnswered
  // }

  const isCurrentStepComplete = () => {
    const currentStepAnswers =
      globalState.userAnswers[steps[currentStep]?.title]
    const currentStepQuestions = steps[currentStep].blocks.filter(
      (item: any) => item.question,
    )

    const unansweredQuestions: any = []

    const allQuestionsAnswered = currentStepQuestions.every((item: any) => {
      const isAnswered = currentStepAnswers?.[item.question] !== undefined
      if (!isAnswered) {
        unansweredQuestions.push(item.question)
      }
      return isAnswered
    })

    // You can decide what to return based on your needs
    return allQuestionsAnswered ? [] : unansweredQuestions
  }

  const isEditorMode = () => {
    const isEditing = localStorage.getItem('tina.local.isLogedIn')

    return !!isEditing
  }

  const handleNext = () => {
    const notAnswrd = isCurrentStepComplete()

    console.log('isCurrentStepComplete -->', notAnswrd)

    if (notAnswrd.length && !isEditorMode()) {
      const childElement = document.querySelector(`[data-q="${notAnswrd[0]}"]`)

      if (childElement) {
        const keyframes = [
          {
            transform: 'rotate(0deg) scale(1)',
            backgroundColor: 'transparent',
          },
          {
            transform: 'rotate(0.2deg) scale(1.05)',
            backgroundColor: '#fcd4d4',
          },
          {
            transform: 'rotate(-0.2deg) scale(0.95)',
            backgroundColor: 'transparent',
          },
          {
            transform: 'rotate(0.2deg) scale(1.05)',
            backgroundColor: '#fcd4d4',
          },
          {
            transform: 'rotate(-0.2deg) scale(0.95)',
            backgroundColor: 'transparent',
          },
          {
            transform: 'rotate(0deg) scale(1)',
            backgroundColor: 'transparent',
          },
        ]

        const timing = {
          duration: 400,
          iterations: 2,
        }

        const parentElement = childElement.parentElement
        if (parentElement) {
          const elementPosition =
            parentElement.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - 200

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          })

          setTimeout(() => {
            parentElement.animate(keyframes, timing)
          }, 500)

          // parentElement.animate(keyframes, timing)
        }
      }

      // alert('Please anser the all questions')
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
          id="skip_button"
          variant="secondary"
          size="md"
          onClick={handleSkip}
          className=""
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
