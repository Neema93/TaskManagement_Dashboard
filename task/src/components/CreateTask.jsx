import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import TaskForm from "./TaskForm";
import { addTask } from "../actions/tasks";

const CreateTask = (props) => {
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    props.dispatch(addTask(task));
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm onSubmit={handleSubmit} />
    </div>
  );
};

export default connect()(CreateTask);