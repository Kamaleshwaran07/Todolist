import React, { useState } from "react";
import "../App.css";
const Card = ({
  item,
  removeTodo,
  editTodo,
  handlePending,
  handleCompleted,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(item.title);
  const [editedDescription, setEditedDescription] = useState(item.description);

  const handleEdit = () => {
    editTodo(item.id, editedTitle, editedDescription);
    setIsEditing(false);
  };

  return (
    <>
      {/* If editing button is clicked then the below input tags will be displayed */}
      {isEditing ? (
        <>
          <div className="row ms-2">
            <input
              type="text"
              className="col-3 rounded form-text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />

            <input
              type="text"
              className="form-text col-3 rounded"
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            />
            {/* To store the edited Todo details */}
            <button className="btn col-3 rounded" onClick={handleEdit}>
              Save
            </button>
          </div>
        </>
      ) : (
        <>
          <h3>Task No {item.id}</h3>
          <h1>Title : {item.title}</h1>
          <p>Description : {item.description}</p>
        </>
      )}
      <select
        className="col-4 m-2 btn"
        onChange={(e) =>
          e.target.value === "Pending" ? handlePending() : handleCompleted()
        }
      >
        <option value={"Pending"}>Pending</option>
        <option value={"Completed"}>Completed</option>
      </select>
      <div className="row ms-2">
        <button
          className="col-4 m-2 btn"
          type="button"
          onClick={() => {
            setIsEditing(true); // To display the editing form
          }}
        >
          Edit <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          className="col-4 m-2 btn rounded"
          type="button"
          onClick={() => {
            removeTodo(item.id);
          }}
        >
          Remove <i className="fa-solid fa-trash-can"></i>
        </button>
      </div>
    </>
  );
};

export default Card;
