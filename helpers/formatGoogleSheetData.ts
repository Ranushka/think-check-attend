import toSentenceCase from './toSentenceCase'

const formatGoogleSheetData = (data: any) => {
  const groupedData: any = []

  let currentCategory: any,
    currentSection: any,
    currentQuestion: any = null

  let currentAnswer = null
  let currentDependentQuestion = null

  data.forEach((item: any) => {
    const {
      CATEGORY,
      SECTION,
      QUESTION,
      ANSWER,
      DEPENDENT_QUESTION,
      DEPENDENT_ANSWER,
      TRIGGER,
      SCORE,
      ID,
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
        SCORE: SCORE?.split(','),
        ID,
      }

      currentSection.QUESTIONS.push(currentQuestion)
      currentAnswer = null
      currentDependentQuestion = null
    }

    if (ANSWER) {
      currentAnswer = {
        DEPENDENT_QUESTIONS: [],
        ANSWER: ANSWER.split(',').map((itm: any) => itm.trim()),
      }
      currentQuestion.ANSWERS = currentAnswer
      currentDependentQuestion = null
    }

    if (DEPENDENT_QUESTION) {
      currentDependentQuestion = {
        ID,
        SCORE: SCORE?.split(','),
        DEPENDENT_QUESTION: toSentenceCase(DEPENDENT_QUESTION),
        DEPENDENT_ANSWERS: DEPENDENT_ANSWER.split(',').map((itm: any) =>
          itm.trim(),
        ),
      }
      currentQuestion.DEPENDENT_QUESTIONS.push(currentDependentQuestion)
    }
  })

  // console.log('groupedData --', groupedData)

  return groupedData
}

export default formatGoogleSheetData
