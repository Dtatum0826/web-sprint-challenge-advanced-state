import React, { useEffect } from 'react'
import * as actionCreators from '../state/action-creators'
import { connect, useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'



function Quiz(props) {
  const dispatch = useDispatch()
  
 useEffect(()=>{
  dispatch(actionCreators.fetchQuiz())
 },[])
  


console.log(props.quiz,"Inside Quiz")

const handleSubmitAnswerClick = ()=>{
  dispatch(actionCreators.postAnswer({
    quiz_id:props.quiz.quiz_id,
    answer_id: props.selectedAnswer
  }))
}

  const handleSelectClick = (answer) => {
    dispatch(actionCreators.selectAnswer(answer))
  }
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
       props.quiz && props.quiz.question ? (
          <>
            <h2>{props.quiz.question}</h2>

            <div id="quizAnswers">
              <div className={`${props.selectedAnswer === props.quiz.answers[0].answer_id ? 'selected answer' : 'answer'}`}>
              {props.quiz.answers[0].text}
                <button onClick={()=> handleSelectClick(props.quiz.answers[0])}>
                {`${props.selectedAnswer === props.quiz.answers[0].answer_id ? 'SELECTED' : 'Select'}`}
                </button>
              </div>

              <div className={`${props.selectedAnswer === props.quiz.answers[1].answer_id ? 'selected answer' : 'answer'}`}>
               {props.quiz.answers[1].text} 
                <button onClick={()=> handleSelectClick(props.quiz.answers[1])}>
                {`${props.selectedAnswer === props.quiz.answers[1].answer_id ? 'SELECTED' : 'Select'}`}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick ={handleSubmitAnswerClick}disabled={props.selectedAnswer === null}> Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}
const mapStateToProps =(state)=>({
  quiz: state.quiz
})

export default connect(st => st, actionCreators)(Quiz)