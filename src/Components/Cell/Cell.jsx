import React from 'react'
import './Cell.scss'

const Cell = (props) => {
  return (
    <div className="cell" id={props.id} onClick={props.onClick}>
      {props.value}
    </div>
  )
}

export default Cell