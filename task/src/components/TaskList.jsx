import { connect } from "react-redux";
import TaskListItem from "./TaskListItem";  // Assuming TaskListItem is your row component
import getVisibleTasks from "../selectors/getVisibleTasks";  // Assuming this is a selector
import React from 'react';

const TaskList = (props) => {
  const { tasks } = props;

  return (
    <div >
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Deadline</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <TaskListItem key={task.id} {...task} />  
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: getVisibleTasks(state.tasks, state.filters),  // Fetch filtered tasks from state
  };
};

export default connect(mapStateToProps)(TaskList);
