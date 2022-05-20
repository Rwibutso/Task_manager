import React from 'react'
import del from "../../src/img/del.png"

export const Task = ({task, ondelete, onToggle}) => {
   
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>{task.text} <img src={del} alt='' className="d-img" onClick={()=> ondelete(task.id)}/></h3>
        <p>{task.day}</p>
    </div>
  )
}
