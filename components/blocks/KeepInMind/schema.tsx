// import QuillEditor from '../../atoms/QuillEditor'
// import { defineConfig, wrapFieldsWithMeta } from 'tinacms'
// import React from 'react'

const AnswerTipInfo = {
  name: 'BB_KeepInMind',
  label: 'Keep in mind...',
  fields: [
    // {
    //   label: 'Page Content',
    //   name: 'contentquil',
    //   type: 'number',
    //   component: QuillEditor,
    // },
    {
      type: 'rich-text',
      name: 'content',
      label: 'Content',
    },
  ],
}

export default AnswerTipInfo
