// import { iconSchema } from "../../util/icon";

const WizardSteps = {
  name: 'WizardSteps',
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
        defaultItem: {
          question: 'How do I introduce a new pet to my existing pets?',
          answer: {
            type: 'root',
            children: [
              {
                type: 'p',
                children: [
                  {
                    type: 'text',
                    text: 'It is important to introduce new pets slowly and in a controlled environment. Gradually allow them to interact under supervision, and provide separate spaces if needed.',
                  },
                ],
              },
            ],
          },
        },
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
          type: 'rich-text',
          name: 'content',
          label: 'Content',
          templates: [
            {
              name: 'DateTime',
              label: 'Date & Time',
              inline: true,
              fields: [
                {
                  name: 'format',
                  label: 'Format',
                  type: 'string',
                  options: ['utc', 'iso', 'local'],
                },
              ],
            },
            {
              name: 'CheckerQuestion',
              label: 'Checker question',
              fields: [
                {
                  type: 'string',
                  name: 'question',
                  label: 'Question',
                },
                {
                  type: 'string',
                  name: 'answersList',
                  label: 'Answers list',
                  list: true,
                },
                {
                  type: 'boolean',
                  name: 'isCheckbox',
                  label: 'Multiple choice',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export default WizardSteps
