import React,{useState} from 'react';
import Forminput from './component/Forminput'
import Listitems from './component/Listitems'
import './App.css';


function App() {
  const [todos, setTodos] = useState([]);
  
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text:todo,
        
      }
    ]);
  };
  const removeTodo =id=> {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
const edit=(id,newtodo)=>{
  setTodos (todos.map((todo)=>{
   return todo.id ===id?{...todo, text: newtodo }:todo
  }))
}
  
  return (
    <div className="App">
     <h1>My To Do List</h1>
     <Forminput  addTodo={ addTodo} />
     <Listitems todos={ todos} removeTodo={ removeTodo} edit={edit} />
     
    </div>
  );
}

export default App
