// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTER_CLOCKWISE, RESET_FORM, RESET_SELECTED_ANSWER, SET_INFO_MESSAGE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, UPDATE_NEW_FALSE_ANSWER, UPDATE_NEW_QUESTION, UPDATE_NEW_TRUE_ANSWER } from './action-types';

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch (action.type) {
    case MOVE_CLOCKWISE:
      return (state + 1) % 6
    case MOVE_COUNTER_CLOCKWISE:
      return (state - 1 + 6) % 6
    default:
      return state
  }
}
const initialQuizState = {
  quiz_id: null,
  question: null,
  answers: null
}
function quiz(state = initialQuizState, action) {
  switch (action.type) {
    case SET_QUIZ_INTO_STATE:

      return {
        quiz_id: action.payload.quiz_id,
        question: action.payload.question,
        answers: action.payload.answers
      }
    default:
      return state
  }


}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch (action.type) {
    case SET_SELECTED_ANSWER:
      return action.payload.answer_id
    case RESET_SELECTED_ANSWER:
      return initialSelectedAnswerState
  }



  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:
      console.log(action.payload)
      return action.payload
    
  }
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch (action.type) {
    //  case INPUT_CHANGE:
    //   return{
    //     ...state,
    //      [action.payload.id] : action.payload.value

    //   }
    case UPDATE_NEW_QUESTION:
      return {
        ...state,
        newQuestion: action.payload
      }
    case UPDATE_NEW_TRUE_ANSWER:
      return {
        ...state,
        newTrueAnswer: action.payload
      }
    case UPDATE_NEW_FALSE_ANSWER:
      return {
        ...state,
        newFalseAnswer: action.payload
      }
    case RESET_FORM:

      return initialFormState
    default:
      return state
  }

}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
