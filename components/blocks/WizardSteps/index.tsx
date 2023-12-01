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
