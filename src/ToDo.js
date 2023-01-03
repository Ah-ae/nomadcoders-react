import { useState } from "react";

function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => setTodo(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;

    setTodos((current) => [todo, ...current]);
    setTodo("");
  };
  const deleteBtn = (idx) => {
    setTodos(todos.filter((todo, todoIndex) => idx !== todoIndex));
  };
  console.log(todos);
  console.log(todos.map((todo, idx) => <li>{todo}</li>));
  return (
    <div>
      <h1>My To Dos : {todos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          value={todo}
          onChange={onChange}
          type="text"
          placeholder="Write your to do here..."
        />
        <button>Add To do</button>
      </form>
      <hr />
      <ul>
        {todos.map((todo, idx) => (
          <li key={idx}>
            {todo}
            <button onClick={() => deleteBtn(idx)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDo;
