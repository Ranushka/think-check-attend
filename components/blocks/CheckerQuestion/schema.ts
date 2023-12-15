const CheckerQuestion = {
  name: 'BB_CheckerQuestion',
  label: 'Checker Question',
  ui: {
    itemProps: (item: any) => {
      return { label: item?.question }
    },
  },
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
}

export default CheckerQuestion
