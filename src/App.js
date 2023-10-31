import React, { useState } from 'react';

import FormInput from './components/FormInput';
import TodoList from './components/TodoList';

import './style.css';

export default function App() {
  // const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([
    { name: 'Buy Milk', isCompleted: false },
    { name: 'Buy Bread', isCompleted: false },
    { name: 'Buy Moi Moi', isCompleted: false },
  ]);

  // const addTodo = () => {
  //   console.log('I want to add something');
  //   console.log(todo);
  //   // todos.push(todo)
  //   setTodos([...todos, { name: todo, isCompleted: false }]);
  //   setTodo('');
  // };

  const handleSubmit = (event, todo) => {
    event.preventDefault();
    setTodos((prevState) => [...prevState, { name: todo, isCompleted: false }]);
    // setTodo('');
  };

  const wrapperFunc = () => addTodo('buy milk');

  const handleSave = (todo, newValue) => {
    // console.log(index);
    const todoIndex = todos.findIndex((item) => item.name === todo.name);
    console.log(todoIndex);
    todoIndex;

    const clonedTodos = [...todos];
    clonedTodos[todoIndex].name = newValue;

    setTodos(clonedTodos);
  };

  return (
    <div>
      <FormInput handleSubmit={handleSubmit} />

      <TodoList todos={todos} handleSave={handleSave} />
    </div>
  );
}
