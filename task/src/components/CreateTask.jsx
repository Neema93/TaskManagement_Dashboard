import React from "react";
import { connect } from "react-redux";
import TaskForm from "./TaskForm";
import { addTask } from "../actions/tasks";
import { useNavigate } from "react-router-dom";

const CreateTask = (props) => {
  const navigate = useNavigate();
  const doStuff = (event) => navigate("/dashboard");
  console.log("createTask", props);
  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm
        onSubmit={(task) => {
          props.dispatch(addTask(task));
          doStuff();
        }}
      />
    </div>
  );
};

export default connect()(CreateTask);
