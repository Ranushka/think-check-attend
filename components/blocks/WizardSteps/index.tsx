import RendererMarkdown from '../../../components/atoms/RendererMarkdown'
import WizardStepsSchema from './schema'
import React, { useState } from 'react'
import Tabs from './tabs'
import { classNames } from '../../../helpers/classNames'
import SummaryTab from './SummaryTab'
import { tinaField } from 'tinacms/dist/react'

function WizardSteps({ data }: any) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = data.items

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

  const renderStep = (stepIndex: number) => {
    const step = steps[stepIndex]
    return (
      <section data-tina-field={tinaField(step)}>
        <h2 className="text-3xl pt-12 pb-8">{step.title}</h2>
        <RendererMarkdown content={step.content} />
      </section>
    )
  }

  return (
    <div className="max-w-5xl m-auto px-10">
      <Tabs
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      {currentStep === steps.length ? <SummaryTab /> : renderStep(currentStep)}

      <div className="flex justify-between sticky -bottom-1 bg-primary-50 rounded-md">
        <button
          className={classNames(
            'm-2 px-8 py-2 bg-primary-500 rounded-md',
            !(currentStep > 0) && 'opacity-20 pointer-events-none',
          )}
          onClick={handleBack}
        >
          Back
        </button>

        <button
          className={classNames(
            'm-2 px-8 py-2 bg-primary-500 rounded-md',
            currentStep === steps.length ? 'hidden' : '',
          )}
          onClick={handleNext}
        >
          {currentStep === steps.length - 1 ? 'Show Results' : 'Next'}
        </button>
      </div>
    </div>
  )
}

export default WizardSteps
export { WizardStepsSchema }
