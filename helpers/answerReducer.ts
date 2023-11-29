export const answerReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'SET_SINGLE_ANSWER':
      return {
        ...state,
        [action.questionId]: { answer: action.answer, score: action.score },
      }
    case 'ADD_MULTIPLE_ANSWER':
      const existingAnswers = state[action.questionId]
        ? state[action.questionId].answer
        : []
      return {
        ...state,
        [action.questionId]: {
          answer: [...existingAnswers, action.answer],
          score: action.score,
        },
      }
    case 'REMOVE_MULTIPLE_ANSWER':
      const updatedAnswers = state[action.questionId].answer.filter(
        (ans: any) => ans !== action.answer,
      )
      return {
        ...state,
        [action.questionId]: { answer: updatedAnswers, score: action.score },
      }
    default:
      return state
  }
}
