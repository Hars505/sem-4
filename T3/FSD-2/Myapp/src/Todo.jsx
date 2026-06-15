import { useState } from "react";

function Todo() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleChange = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (event) => {
    const newTodo = {
      id: Date.now(), // Time-based ID
      text: inputValue,
    };
    setTodos([...todos, newTodo]);
    setInputValue("");
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <>
      <h2>Create a Todo:</h2>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter a task..."
        />
        <button type="submit" onClick={handleSubmit}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "8px" }}>
            {todo.text}
            <br />
            <button onClick={() => handleDelete(todo.id)}>
                Delete</button>
          </li>))}
      </ul>
    </>
  );
}

export default Todo;
