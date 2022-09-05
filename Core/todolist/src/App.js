
import './App.css';
import React, { useState } from 'react';
import Todo from './components/Todo';

function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (e) => {
    e.preventDefault();
    //so empty items are not created
    if(newTodo.length === 0) return;

    //create todo object to be able to toggle checkbox
    const todoItem ={
      text: newTodo,
      complete: false
    };

    //setTodos and passes in an new todo into the new array
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (deleteIdx) => {
    const filteredTodo = todos.filter((todo, i) => {
      return i !== deleteIdx;
    })

    setTodos(filteredTodo)
  }

  const handleTodoToggle = (index) => {
    const updatedTodos = todos.map((todo, i) => {
      if(index === i) {
        todo.complete = !todo.complete;
      }
      //best practices below, but not necessary for us right now
      //to avoid mutating todo do below:
      //const updtatedTodo = {...todo, complete: !todo.complete};
      //return updatedTodo;

      return todo;
    });

    setTodos(updatedTodos);
  }


  return (
    <div style={{ textAlign: "center ", paddingTop: "20px"}}>
      <form onSubmit={ (e) => {
        handleNewTodoSubmit(e);
      }}>
        <input 
        onChange={ (e) => {
          setNewTodo(e.target.value);
        }}
        type="text" value={newTodo}/>
        <div>
          <button style={{ backgroundColor: "blue", color: "white", padding: "5px 10px", margin: "10px", borderRadius: "5px"}}>Add</button>
        </div>
      </form>

      {
        todos.map((todo, i) => {
          return <Todo key={i} todo={todo} handleTodoToggle={handleTodoToggle} i={i} handleTodoDelete={handleTodoDelete}/>;
        })}
    </div>
  );
}

export default App;
