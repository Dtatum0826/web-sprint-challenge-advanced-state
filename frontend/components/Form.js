import React from 'react'
import { connect, useDispatch } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {
const dispatch = useDispatch()

const{newQuestion,newTrueAnswer,newFalseAnswer,inputChange, resetForm} = props
  const onChange = evt => {
    
  }

  const onSubmit = evt => {
    evt.preventDefault()
    resetForm()
  }

  const isFormValid = newQuestion.trim().length > 1 
  && newTrueAnswer.trim().length > 1
  && newFalseAnswer.trim().length > 1

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} onChange={onChange} id="newQuestion" placeholder="Enter question" value={newQuestion} />
      <input maxLength={50} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" value ={newTrueAnswer}/>
      <input maxLength={50} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" value ={newFalseAnswer} />
      <button id="submitNewQuizBtn" disabled={isFormValid}>Submit new quiz</button>
    </form>
  )
}
const mapStateToProps = state => ({
  newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer
})

export default connect(mapStateToProps, actionCreators)(Form)
