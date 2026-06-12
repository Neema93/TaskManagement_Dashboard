import TaskCalendar from "./TaskCalendar";
import TaskList from "./TaskList";
import TaskListFilters from "./TaskListFilters";

const TaskDashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="search">
      <TaskListFilters />
      <TaskList />
      </div>
      <div className="calendar">
      <TaskCalendar />
      </div>
    </div>
  );
};
export default TaskDashboard;
