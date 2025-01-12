import { useState } from "react";
import { connect } from "react-redux";
import TaskListItem from "./TaskListItem";
import getVisibleTasks from "../selectors/getVisibleTasks";
const TaskList = (props) => {
  const { tasks } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(tasks.length / itemsPerPage);
  const currentTask = tasks.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <div>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Deadline</th>
                <th>Status</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {currentTask.map((task) => (
                <TaskListItem key={task.id} {...task} />
              ))}
            </tbody>
          </table>
          <div>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <span>
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
          <div>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                disabled={currentPage === index + 1}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tasks: getVisibleTasks(state.tasks, state.filters),
  };
};

export default connect(mapStateToProps)(TaskList);
