import React, { useState } from 'react'
import * as actionCreators from '../state/action-creators'
import { connect, useSelector } from 'react-redux'
import { MOVE_CLOCKWISE ,MOVE_COUNTER_CLOCKWISE} from '../state/action-types'
import { useDispatch } from 'react-redux'
import { moveClockwise, moveCounterClockwise, wheel } from '../state/action-creators'
import axios from 'axios'



 function Wheel() {
  
  const dispatch = useDispatch()
   const value = useSelector(state => state)
  //  console.log(value)
  //  console.log(value.wheel)
  const handleClockwiseClick = () =>{
    dispatch(actionCreators.moveClockwise())
    axios.get( 'http://localhost:9000/api/quiz/next')
    .then(res => {
     console.log(res.data)
    //  dispatch({type:types.SET_QUIZ_INTO_STATE, payload: res.data})
    })
  }


  const handleCounterClockwiseClick = () =>{
    dispatch(actionCreators.moveCounterClockwise())
  }


  return (
    <div id="wrapper">
      <div id="wheel">
     
        <div className={`${value.wheel === 0 ? 'cog active' :'cog' }`} style={{ "--i": 0 }}>{value.wheel === 0 ? 'B' : ''}</div>
        <div className={`${value.wheel === 1 ? 'cog active' :'cog' }`} style={{ "--i": 1 }}>{value.wheel === 1 ? 'B' : ''}</div>
        <div className={`${value.wheel === 2 ? 'cog active' :'cog' }`} style={{ "--i": 2 }}>{value.wheel === 2 ? 'B' : ''}</div>
        <div className={`${value.wheel === 3 ? 'cog active' :'cog' }`} style={{ "--i": 3 }}>{value.wheel === 3 ? 'B' : ''}</div>
        <div className={`${value.wheel === 4 ? 'cog active' :'cog' }`} style={{ "--i": 4 }}>{value.wheel === 4 ? 'B' : ''}</div>
        <div className={`${value.wheel === 5 ? 'cog active' :'cog' }`} style={{ "--i": 5 }}>{value.wheel === 5 ? 'B' : ''}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={handleCounterClockwiseClick} >Counter clockwise</button>
        <button id="clockwiseBtn"onClick={handleClockwiseClick}  >Clockwise</button>
      </div>
    </div>
  )
}


export default connect(null, actionCreators)(Wheel)