import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import Todos from './Todos'

import  './home.css'
import Newtodo from './Newtodo'

const Home = () => {

  const [todos,setTodos] = useState([])

    const handleAddTodo = (todo)=>{
      
      setTodos((prevtodo)=>{
        return [...prevtodo,{id:uuidv4(), todo}]
      })
      console.log(todos);
    }


    const handleRemoveTodo=(id)=>{
      setTodos((prevtodo)=>{
        const filteredTodo = prevtodo.filter((todo)=>todo.id !== id)
        return filteredTodo;
      });
    }

  return (
    <div className='container'>
      <h2 style={{color:"white"}}>Todo App</h2>
      <Newtodo onAddTodo={handleAddTodo}/>
      <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home
