import TaskCalendar from "./TaskCalendar";
import TaskList from "./TaskList";
import TaskListFilters from "./TaskListFilters";

const TaskDashboard = () => {
  return (
    <>
      <h1> Welcome to dashboard</h1>
      <TaskListFilters />
      <TaskList />
      <TaskCalendar />
    </>
  );
};
export default TaskDashboard;
