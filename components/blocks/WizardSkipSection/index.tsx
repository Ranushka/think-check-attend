import React from 'react'
import WizardSkipSectionSchema from './schema'
import RendererMarkdown from '../../atoms/RendererMarkdown'
import Button from '../../atoms/Button'

const WizardSkipSection = ({ data }: any) => {
  return (
    <div className="text-base leading-7 mb-6 bg-[#fef9c4] px-8 py-4 border border-[#fef9c4] rounded-lg relative">
      <div className="color-text-with-bg">
        <RendererMarkdown content={data.content} />
      </div>
      <Button
        variant="secondary"
        size="md"
        onClick={() => document.getElementById('skip_button')?.click()}
        className="mr-auto -mt-4"
      >
        Skip section
      </Button>
    </div>
  )
}

export default WizardSkipSection
export { WizardSkipSectionSchema }
