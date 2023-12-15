const defaultItem = {
  question: 'How do I introduce a new pet to my existing pets?',
  answer:
    'It is important to introduce new pets slowly and in a controlled environment. Gradually allow them to interact under supervision, and provide separate spaces if needed.',
}

const BB_QnA = {
  name: 'BB_QnA',
  label: 'QnA',
  ui: {
    defaultItem: {
      title: 'Frequently Asked Questions',
      helpr_text: {
        type: 'root',
        children: [
          {
            type: 'p',
            children: [
              {
                type: 'text',
                text: 'We are here to help! If you have any questions, please contact us.',
              },
            ],
          },
        ],
      },
      items: [defaultItem, defaultItem, defaultItem],
    },
  },
  fields: [
    {
      type: 'string',
      name: 'title',
      label: 'Block title',
    },
    {
      type: 'rich-text',
      name: 'helpr_text',
      label: 'Help text',
    },
    {
      type: 'object',
      list: true,
      name: 'items',
      label: 'Questions list',
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
          return { label: item?.question }
        },
      },
      fields: [
        {
          type: 'string',
          ui: {
            component: 'textarea',
          },
          name: 'question',
          label: 'Question',
        },
        {
          type: 'rich-text',
          name: 'answer',
          label: 'Answer',
        },
      ],
    },
  ],
}

export default BB_QnA
