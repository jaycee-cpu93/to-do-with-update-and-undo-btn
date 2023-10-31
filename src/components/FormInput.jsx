import React, { useState } from 'react';

const FormInput = (props) => {
  const style = { color: 'red' };
  const [todo, setTodo] = useState('');

  const { handleSubmit } = props;

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        handleSubmit(event, todo);
        setTodo('');
      }}
    >
      <input type="text" value={todo} onChange={handleChange} />

      <button style={style} type="submit">
        Add Todo
      </button>
    </form>
  );
};

export default FormInput;
