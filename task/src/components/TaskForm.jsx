import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const TaskForm = ({ task, onSubmit }) => {
  const [title,setTitle] = useState(task ? task.title : "");
  const [description, setDescription] = useState(task ? task.description : "");
  const [deadline, setDeadline] = useState(task ? task.deadline : new Date());
  const [status, setStatus] = useState(task ? task.status : "Pending"  );
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
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmitHandler}>
        <label>Title</label>
        <input 
            type="text"
            autoFocus
            value={title}
            onChange={onTitleChange}
            required
        /><br/>
        <label>Description</label>
        <input
          type="text"
          autoFocus
          value={description}
          onChange={onDescriptionChange}
        /><br/>
        <label>Deadline</label>
        <DatePicker
            selected={deadline}
            onChange={onDeadlineChange}
            dateFormat="yyyy/MM/dd"
          /><br/>
        <label>status</label>
        <select value={status} onChange={onStatusChange}>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select><br/>
        <button className="form_button">Add Task</button>
      </form>
    </div>
  );
};


export default TaskForm;
