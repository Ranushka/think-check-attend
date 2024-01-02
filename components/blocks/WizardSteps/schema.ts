// import { iconSchema } from "../../util/icon";

import { KeepInMindSchema } from '../KeepInMind'
import { CheckerQuestionSchema } from '../CheckerQuestion'
import { heroSchema } from '../Hero'
import { RichTextSchema } from '../RichText'
import { titleSchema } from '../Title'
import { WizardSkipSectionSchema } from '../WizardSkipSection'

const WizardSteps = {
  name: 'BB_WizardSteps',
  label: 'Wizard Steps',
  ui: {
    defaultItem: {},
  },
  fields: [
    {
      type: 'object',
      list: true,
      name: 'items',
      label: 'Steps list',
      ui: {
        itemProps: (item: any) => {
          return { label: item?.title }
        },
      },
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title',
        },
        {
          type: 'object',
          list: true,
          name: 'blocks',
          label: 'Sections',
          ui: {
            visualSelector: true,
          },
          templates: [
            RichTextSchema,
            KeepInMindSchema,
            CheckerQuestionSchema,
            WizardSkipSectionSchema,
          ],
        },
        {
          type: 'string',
          name: 'scoreBreakDown',
          label: 'Score break down',
          description: 'Make sure not to add same score',
          list: true,
        },
        {
          type: 'boolean',
          name: 'skip',
          label: 'Section is skippable',
        },
      ],
    },
  ],
}

export default WizardSteps
