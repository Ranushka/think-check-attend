import RendererMarkdown from '../../../components/atoms/RendererMarkdown'
import WizardStepsSchema from './schema'
import React, { useEffect, useRef, useState } from 'react'
import Tabs from './tabs'
import { classNames } from '../../../helpers/classNames'
import SummaryTab from './SummaryTab'
import { tinaField } from 'tinacms/dist/react'
import BottomTabNav from './BottomTabNav'

function WizardSteps({ data }: any) {
  const [currentStep, setCurrentStep] = useState(0)
  const firstRender = useRef(true)

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    const element = document.getElementById('validatorWizard')
    if (element) {
      element.scrollIntoView({ block: 'start' })
    }
  }, [currentStep])

  const steps = data.items

  const renderStep = (stepIndex: number) => {
    if (currentStep === steps.length) {
      return <SummaryTab steps={steps} />
    }

    const step = steps[stepIndex]
    return (
      <section data-tina-field={tinaField(step)}>
        <RendererMarkdown content={step.content} currentSteTitle={step.title} />
        <div
          className="text-base leading-7 mb-6 bg-green-50 px-8 py-4 border border-green-100 rounded-lg relative"
          data-tina-field={tinaField(step, 'tips')}
        >
          <h3 className="text-3xl mb-4 text-green-800">Keep in mind...</h3>
          <RendererMarkdown content={step.tips} currentSteTitle={step.title} />
        </div>
      </section>
    )
  }

  return (
    <div className="max-w-5xl m-auto px-10" id="validatorWizard">
      <Tabs
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />

      {renderStep(currentStep)}

      <BottomTabNav
        steps={steps}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  )
}

export default WizardSteps
export { WizardStepsSchema }
