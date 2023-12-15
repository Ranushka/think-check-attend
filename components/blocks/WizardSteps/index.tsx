import React, { useEffect, useRef } from 'react'
import RendererMarkdown from '../../../components/atoms/RendererMarkdown'
import WizardStepsSchema from './schema'
import Tabs from './tabs'
import SummaryTab from './SummaryTab'
import { tinaField } from 'tinacms/dist/react'
import BottomTabNav from './BottomTabNav'
import Block from '../../../components/atoms/Block'
import useGlobal from '../../../context/globalContext'

function WizardSteps({ data }: any) {
  const firstRender = useRef(true)
  const { setGlobalState, state: globalState } = useGlobal()

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false
      return
    }

    const element = document.getElementById('validatorWizard')
    if (element) {
      element.scrollIntoView({ block: 'start' })
    }
  }, [globalState.currentStep])

  const steps = data.items

  const renderStep = (stepIndex: any) => {
    if (globalState.currentStep === steps.length) {
      return <SummaryTab steps={steps} />
    }

    const step = steps[stepIndex]
    return (
      <section className="pt-8">
        {step?.blocks?.map((block: any, i: number) => (
          <div key={i} data-tina-field={tinaField(block)}>
            <Block block={block} />
          </div>
        ))}
      </section>
    )
  }

  const handleSetCurrentStep = (index: number) => {
    setGlobalState({ currentStep: index, currentSteTitle: steps[index]?.title })
  }

  return (
    <div className="max-w-5xl m-auto px-10" id="validatorWizard">
      <Tabs
        steps={steps}
        currentStep={globalState.currentStep}
        setCurrentStep={handleSetCurrentStep}
      />

      {renderStep(globalState.currentStep)}

      <BottomTabNav
        steps={steps}
        currentStep={globalState.currentStep}
        setCurrentStep={handleSetCurrentStep}
      />
    </div>
  )
}

export default WizardSteps
export { WizardStepsSchema }
