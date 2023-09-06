import toSentenceCase from './toSentenceCase'

const formatGoogleSheetData = (data: any) => {
  const groupedData = []

  let currentCategory = null
  let currentSection = null
  let currentQuestion = null
  let currentAnswer = null
  let currentDependentQuestion = null

  data.forEach((item) => {
    const {
      CATEGORY,
      SECTION,
      QUESTION,
      ANSWER,
      DEPENDENT_QUESTION,
      DEPENDENT_ANSWER,
      TRIGGER,
    } = item

    if (CATEGORY) {
      currentCategory = { CATEGORY: toSentenceCase(CATEGORY), SECTIONS: [] }
      groupedData.push(currentCategory)
      currentSection = null
      currentQuestion = null
      currentAnswer = null
      currentDependentQuestion = null
    }

    if (SECTION) {
      currentSection = { SECTION: toSentenceCase(SECTION), QUESTIONS: [] }
      currentCategory.SECTIONS.push(currentSection)
      currentQuestion = null
      currentAnswer = null
      currentDependentQuestion = null
    }

    if (QUESTION) {
      currentQuestion = {
        QUESTION,
        ANSWERS: [],
        TRIGGER,
        DEPENDENT_QUESTIONS: [],
      }

      currentSection.QUESTIONS.push(currentQuestion)
      currentAnswer = null
      currentDependentQuestion = null
    }

    if (ANSWER) {
      currentAnswer = {
        DEPENDENT_QUESTIONS: [],
        ANSWER: ANSWER.split(',').map((itm) => itm.trim()),
      }
      currentQuestion.ANSWERS = currentAnswer
      currentDependentQuestion = null
    }

    if (DEPENDENT_QUESTION) {
      currentDependentQuestion = {
        DEPENDENT_QUESTION: toSentenceCase(DEPENDENT_QUESTION),
        DEPENDENT_ANSWERS: DEPENDENT_ANSWER.split(',').map((itm) => itm.trim()),
      }
      currentQuestion.DEPENDENT_QUESTIONS.push(currentDependentQuestion)
    }

    // if (DEPENDENT_ANSWER) {
    //   currentDependentQuestion.DEPENDENT_ANSWERS.push(DEPENDENT_ANSWER)
    // }
  })

  return groupedData
}

export default formatGoogleSheetData
