import React, { useState } from 'react'

const App = () => {
  const [todo, settodo] = useState([])
  return (
    <div>
    <div className='m-8'>
    <h1>Todo App</h1>
    <input type="text" className='bg-purple-400' onKeyDown={(event)=> {
      if (event.code==="Enter") {
        console.log("Enter pressed");
        settodo([...todo,event.target.value])
        event.target.value=""
      }
  }} />
  <br />
  {
    todo.map((value,index)=>{
      return <div key={index} className='mt-2 flex justify-between'>
        <div>
        {index+1}. {value}
        </div>
        <div className='text-red-500 cursor-pointer' onClick={()=> {
          const newTodoList=todo.filter((value,i)=>{
            return (i!==index) ? true : false;
          })
          settodo(newTodoList)
        }}>Delete</div>
      </div>
    })
  }
    </div>
    </div>
  )
}

export default App