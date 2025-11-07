import TaskCalendar from "./TaskCalendar";
import TaskList from "./TaskList";
import TaskListFilters from "./TaskListFilters";

const TaskDashboard = () => {
  return (
    <div className="dashbord-container">
      <div className="search">
      <TaskListFilters />
      <TaskList />
      </div>
      <div className="calender">
      <TaskCalendar />
      </div>
    </div>
  );
};
export default TaskDashboard;
