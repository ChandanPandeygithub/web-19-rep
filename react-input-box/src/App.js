import "./styles.css";
import { useState } from "react";

export default function App() {
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClear = () => {
    setText("");
    setTodos([]);
  };

  const handleAdd = () => {
    setTodos([...todos, text]);
  };
  return (
    <div className="App">
      <input value={text} onChange={handleChange} placeholder="type hare somthing to display" /> <br/>
      <button onClick={handleClear}>CLEAT</button>
      <br/>
      <button onClick={handleAdd}>ADD</button>
      <ul>
        {todos.map((todo) => (
          <h2>{todo}</h2>
        ))}
      </ul>
    </div>
  );
}
