import React from 'react'
import Modall from './Modal'
 function Listitems({todos,removeTodo,edit} ) {
    
    return (
        <div>
      <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              
                {todo.text}
              
              <button className="btn-remove" onClick={() => removeTodo(todo.id)}>
                x
              </button>
              <Modall edit={edit} todot={todo.text} id={todo.id}  />
              
            </li>
            
          ))}
          
        </ul>
        </div>
    ) 
}
export default Listitems