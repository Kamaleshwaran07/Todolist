import React, { useEffect, useState } from "react";
import Card from "./Components/Card";
import Input from "./Components/Input";
import "./App.css";

const App = () => {
  const [state, setState] = useState("");
  const [todo, setTodo] = useState([]);
  const [filteredTodos, setFilteredTodos] = useState(todo);

  const addTodoData = (newTitle, newDescription) => {
    let newData = {
      id: todo.length + 1,
      title: newTitle,
      description: newDescription,
      completed: false,
    };
    setTodo([...todo, newData]);
  };
  //adding the new Todo Card to the DOM
  const removeTodo = (id) => {
    setTodo(todo.filter((todos) => todos.id !== id));
  };
// Removing the Todo Card
  const editTodo = (id, newTitle, newDescription) => {
    setTodo(
      todo.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, title: newTitle, description: newDescription }
          : todoItem
      )
    );
  };
//To edit the Todo inside the card
  const handlePending = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, completed: false } : todoItem
      )
    );
  };
// To handle the dropdown inside the Card to update the status of Todo
  const handleCompleted = (id) => {
    setTodo((prevTodo) =>
      prevTodo.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, completed: true } : todoItem
      )
    );
  };

  useEffect(() => {
    let filtered = [];
    if (state === "Pending") {
      filtered = todo.filter((todos) => !todos.completed);
    } else if (state === "Completed") {
      filtered = todo.filter((todos) => todos.completed);
    } else {
      filtered = todo;
    }
    setFilteredTodos(filtered);
  }, [state, todo]);
  //To handle the filter dropdown based on the option the Todos are displayed

  return (
    <div className="App">
      <header className="container-fluid row " id="header">
        <h1 className="text-center col-12">Todo List</h1>

        <Input
          className="col-6"
          state={state}
          setState={setState}
          todo={todo}
          setTodo={setTodo}
          addTodoData={addTodoData}
        />
      </header>
      <main className="container">
        <h1>My Todos</h1>
        <select
          className="btn"
          value={state}
          onChange={(e) => setState(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="All">All</option>
          <option value="Completed">Completed</option>
        </select>
        <div className="container  row">
          {filteredTodos.map((item, index) => (
            <div className="col-3 m-2 card p-2 mt-2 mb-2" key={index}>
              <Card
                item={item}
                removeTodo={removeTodo}
                handlePending={() => handlePending(item.id)}
                handleCompleted={() => handleCompleted(item.id)}
                editTodo={editTodo}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
