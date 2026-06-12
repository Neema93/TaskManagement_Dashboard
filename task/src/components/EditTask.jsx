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
    <div className="task-page">
      <div className="task-container">
        <h1 className="task-title">Edit Task</h1>
        <TaskForm task={task} onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
});

export default connect(mapStateToProps)(EditTask);
