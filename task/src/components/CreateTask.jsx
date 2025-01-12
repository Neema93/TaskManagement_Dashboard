import React from "react";
import { connect, useDispatch } from "react-redux";
import TaskForm from "./TaskForm";
import { addTask, getTask } from "../actions/tasks";
import { useNavigate } from "react-router-dom";

const CreateTask = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const doStuff = (event) => navigate("/dashboard");
  console.log("createTask", props)
  return (
    <div className="container">
      <h1>Create Task</h1>
      <TaskForm
        onSubmit={(task) => {
          props.dispatch(addTask(task));
          dispatch(getTask());
          doStuff();
          console.log(task);
        }}  
      />
    </div>
  );
};

export default connect()(CreateTask);