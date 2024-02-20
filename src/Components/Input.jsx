import React, { useState, useEffect } from "react";

const Input = ({ state, setState, todo, setTodo, addTodoData }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const handleSubmit = () => {
    addTodoData(title, description);
    setTitle("");
    setDescription("");
  };
  return (
    <div id="input" className="row justify-content-center">
      <input
        type="text"
        placeholder="Enter your task name"
        value={title}
        className="m-2 form-text col-3 rounded"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter the description"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        className="form-text col-3 m-2 rounded"
      />
      <br />
      <button
        className="btn m-2 btn-warning"
        id="submitbtn"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Input;
