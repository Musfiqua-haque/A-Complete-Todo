import React, { useState } from 'react'
import style from './newtodo.module.css'

const Newtodo = (props) => {

const [todo,setTodo] = useState({title:"",desc:""})
const {title,desc} = todo


const handleSubmit=(event)=>{
        event.preventDefault();
        setTodo({title:"",desc:""})
        props.onAddTodo(todo)
}

const handleCahnge=(event)=>{
       const name = event.target.name
       setTodo((oldTodo)=>{
        return {...oldTodo,[name]:event.target.value}
      })
}




  return (
    <div>
      <form className={style.form} onSubmit={handleSubmit}>
        <div  className={style["form-field"]}>
            <label htmlFor='title'>Title:</label>
            <input type='title' name='title' id='name' value={title}  onChange={handleCahnge}/>
        </div>

        <div className={style["form-field"]}>
            <label htmlFor='desc'>Description:</label>
            <textarea type='desc' name='desc' id='desc' value={desc} onChange={handleCahnge}/>
        </div>
        <button className={style.btn}>Add Todo</button>
      </form>
    </div>
  )
}

export default Newtodo
