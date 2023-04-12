// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { INPUT_CHANGE, MOVE_CLOCKWISE, MOVE_COUNTER_CLOCKWISE, RESET_FORM, SET_QUIZ_INTO_STATE } from './action-types';

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
const initialQuizState = null
function quiz(state = initialQuizState, action) {
switch(action.type){
  case SET_QUIZ_INTO_STATE:
    return{
      state: action.payload
    }
    default:
      return state
}

 
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  return state
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  return state
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
  default:
          return state
  }
  
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
