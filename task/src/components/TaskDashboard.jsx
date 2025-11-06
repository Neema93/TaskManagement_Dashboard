import TaskCalendar from "./TaskCalendar";
import TaskList from "./TaskList";
import TaskListFilters from "./TaskListFilters";

const TaskDashboard = () => {
  return (
    <div className="dashbord-container">
      
      <TaskListFilters />
      <TaskList />
      <TaskCalendar />
    </div>
  );
};
export default TaskDashboard;
