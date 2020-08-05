import React,{useState} from 'react'

 function Forminput({addTodo}) {
    const [todo, setTodo] = useState("");
    
     const handleChange=(e)=>{
         e.preventDefault();
         setTodo(e.target.value)
     }
     
     
  const onSubmit = e => {
    e.preventDefault();
    if ((todo !== "") && (todo.trim())) {
      addTodo(todo);
    setTodo("");}
  };
    return (
        
        <div >
      <form onSubmit={onSubmit}>
         <input
          id="todo"
          className="todo-input"
          onChange={handleChange}
          value={todo}
        />
        <button className="addBtn" type="submit" >
          Add
        </button>
      </form>
        </div>
    )
}
export default  Forminput