import React from 'react'
import style from './todo.module.css'

const Todo = (props) => {


  const handlebtn =(id)=>{
    props.onRemoveTodo(id)
  }


    const {tittle,desc} = props.todo
    const {id} = props

  return (
    <article className={style.todo}>
      <div>
        <h3>{tittle}</h3>
        <p>{desc}</p>
      </div>

      <div>
        <button className={style.btn} onClick={handlebtn(id)} >
            <i className='fa fa-trash fa-2x'></i>
        </button>
      </div>
    </article>
  )
    
  
}

export default Todo
