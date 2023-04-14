import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
const dispatch = useDispatch()
const [input, setInput] = useState()
const{newQuestion,newTrueAnswer,newFalseAnswer,inputChange, resetForm} = props
 //console.log(props," Inside Form")
// const onChange = evt => {
  //  const inputId = evt.target.id
  //  const inputValue = evt.target.value
  //    dispatch(actionCreators.inputChange(inputId,inputValue))
  // }

const handleNewQuestionInput = evt => {
  dispatch(actionCreators.updateNewQuestion(evt.target.value))
}

const handleNewTrueAnswerInput = evt => {
  dispatch(actionCreators.updateNewTrueAnswer(evt.target.value))
}

const handleNewFalseAnswerInput = evt => {
  dispatch(actionCreators.updateNewFalseAnswer(evt.target.value))
}
  const onSubmit = evt => {
    evt.preventDefault()
    dispatch(actionCreators.postQuiz({
       question_text: newQuestion,
       true_answer_text: newTrueAnswer,
        false_answer_text: newFalseAnswer
    }))
   dispatch( actionCreators.resetForm())
  }

  const isFormValid = newQuestion.trim().length > 1 
  && newTrueAnswer.trim().length > 1
  && newFalseAnswer.trim().length > 1

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={handleNewQuestionInput} value ={newQuestion} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} onChange={handleNewTrueAnswerInput} value ={newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} onChange={handleNewFalseAnswerInput}value ={newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer"  />
      <button id="submitNewQuizBtn" disabled={!isFormValid}>Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = state => ({
  newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer
})

export default connect(mapStateToProps, actionCreators)(Form)
