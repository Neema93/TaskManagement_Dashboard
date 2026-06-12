import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import TaskForm from "./TaskForm";
import { editTask } from "../actions/tasks";

const EditTask = (props) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = props.tasks.find((t) => t.id.toString() === id);

  const handleSubmit = (updatedTask) => {
    props.dispatch(editTask(id, updatedTask));
    navigate("/dashboard", { replace: true });
  };

  return (
    <>
      <h1>Edit Task</h1>
      <TaskForm task={task} onSubmit={handleSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(EditTask);