import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TaskForm = ({ task, onSubmit }) => {
  const [title, setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [deadline, setDeadline] = useState(task ? task.deadline : new Date());
  const [status, setStatus] = useState(task ? task.status : "Pending");
  const [error, setError] = useState("");

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const onDeadlineChange = (date) => {
    setDeadline(date);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (!title) {
      setError("Title is required.");
    } else {
      setError("");
      const taskData = {
        title,
        description,
        deadline,
        status,
      };
      console.log("Task Submitted:", taskData);
      onSubmit({
        title,
        description,
        deadline,
        status,
      });
    }
  };

  return (
  <div className="task-form">
  {error && <p className="error-message">{error}</p>}

  <form onSubmit={onSubmitHandler}>
    <div className="form-group">
      <label>Title</label>
      <input
        type="text"
        autoFocus
        value={title}
        onChange={onTitleChange}
      />
    </div>

    <div className="form-group">
      <label>Description</label>
      <textarea
        value={description}
        onChange={onDescriptionChange}
        rows="4"
      />
    </div>

    <div className="form-group">
      <label>Deadline</label>
      <DatePicker
        selected={deadline}
        onChange={onDeadlineChange}
        dateFormat="yyyy/MM/dd"
        className="date-picker"
      />
    </div>

    <div className="form-group">
      <label>Status</label>
      <select value={status} onChange={onStatusChange}>
        <option value="Pending">Pending</option>
        <option value="In Progress">In Progress</option>
        <option value="Completed">Completed</option>
      </select>
    </div>

    <button className="form-button">
      {task ? "Update Task" : "Add Task"}
    </button>
  </form>
</div>
  );
};

export default TaskForm;
