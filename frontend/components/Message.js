import React from 'react'
import * as actionCreators from '../state/action-creators'
import { connect } from 'react-redux'

 function Message(props) {
 // console.log(props,'Inside Message')
  return <div id="message">{props.infoMessage}</div>
}


export default connect(st => st, actionCreators)(Message)