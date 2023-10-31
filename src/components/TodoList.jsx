import React, { useState } from 'react';

const TodoList = ({ todos, handleSave }) => {
  const [isUpdateView, setIsUpdateView] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const [newTodoValue, setNewTodoValue] = useState('');

  const handleUpdate = (index, todoName) => {
    setSelectedId(index);
    setNewTodoValue(todoName);
  };

  const handleUpdateChange = ({ target }) => {
    setNewTodoValue(target.value);
  };

  return (
    <div>
      {todos.map((todo, index) => (
        <>
          {!selectedId !== index && (
            <div style={{ display: 'flex' }}>
              <div>{todo.name}</div>
              <button onClick={() => handleUpdate(index, todo.name)}>
                update
              </button>
            </div>
          )}

          {selectedId === index && (
            <div>
              <input
                type="text"
                value={newTodoValue}
                style={{ width: 70 }}
                onChange={handleUpdateChange}
              />
              <button
                onClick={() => {
                  handleSave(todo, newTodoValue);
                  setSelectedId(null);
                  setNewTodoValue('');
                }}
              >
                Save
              </button>
              <button
                onClick={() => {
                  setSelectedId(null);
                  setNewTodoValue('');
                }}
              >
                Undo
              </button>
            </div>
          )}
        </>
      ))}
    </div>
  );
};

export default TodoList;
