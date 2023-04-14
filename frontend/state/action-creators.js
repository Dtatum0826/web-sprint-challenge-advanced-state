// ❗ You don't need to add extra action creators to achieve MVP
import * as types from './action-types'

import axios from 'axios'

export function moveClockwise() {

  return {
    type: types.MOVE_CLOCKWISE,

  }
}

export function moveCounterClockwise() {
  return {
    type: types.MOVE_COUNTER_CLOCKWISE
  }
}

export function selectAnswer(selectedAnswer) {
  return {
    type: types.SET_SELECTED_ANSWER,
    payload: selectedAnswer
  }
}

export function setMessage(message) {
  return {
    type: types.SET_INFO_MESSAGE,
    payload: message
  }
}

export function setQuiz(data) {
  return {
    type: types.SET_QUIZ_INTO_STATE,
    payload: data

  }
}

export function inputChange(id, value) {
  return {
    type: types.INPUT_CHANGE,
    payload: {
      id: id,
      value: value,
    }
  }
}
export function updateNewQuestion(inputValue) { return {
  type: types.UPDATE_NEW_QUESTION,
  payload: inputValue
}}
export function updateNewTrueAnswer(inputValue) { return {
  type: types.UPDATE_NEW_TRUE_ANSWER,
  payload: inputValue
}}
export function updateNewFalseAnswer(inputValue) { return {
  type: types.UPDATE_NEW_FALSE_ANSWER,
  payload: inputValue
}}





export function resetForm() {
  return {
    type: types.RESET_FORM
  }
}
export function resetSelectedAnswer(){
  return{
    type: types.RESET_SELECTED_ANSWER
  }
}

// ❗ Async action creators
export function fetchQuiz() {
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
   // dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: null })
    // On successful GET: from 'http://localhost:9000/api/quiz/next'
    axios.get('http://localhost:9000/api/quiz/next')
      .then(res => {
        console.log(res.data,"Inside Axios")
        dispatch({ type: types.SET_QUIZ_INTO_STATE, payload: res.data })
      })
      .catch(err => console.error(err))
    // - Dispatch an action to send the obtained quiz to its state

  }
}
export function postAnswer(data) {
  return function (dispatch) {
    // On successful POST:
    if(data.quiz_id && data.answer_id){ 
    axios.post('http://localhost:9000/api/quiz/answer',{
      quiz_id: data.quiz_id,
      answer_id: data.answer_id
     })

    .then(res=>{
    // - Dispatch an action to reset the selected answer state
    console.log(res.data)
    // - Dispatch an action to set the server message to state
   dispatch({type:types.SET_INFO_MESSAGE, payload:res.data.message})
    // - Dispatch the fetching of the next quiz
    dispatch(fetchQuiz())
    dispatch({type:types.RESET_SELECTED_ANSWER})
    }) .catch(err => 
      console.error(err))   
    } else  {
      console.log('quiz_id, answer_id')
    }
  }
}
export function postQuiz(data) {
  return function (dispatch) {
     axios.post('http://localhost:9000/api/quiz/new',{
    question_text: data.question_text,
     true_answer_text: data.true_answer_text,
     false_answer_text:  data.false_answer_text
     })
     .then(res=>{
      console.log(res,"Where is the message??")
      dispatch({type:types.SET_INFO_MESSAGE, payload:`Congrats: "${res.data.question}" is a great question!`})
      dispatch({type:types.RESET_FORM})
     })
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
