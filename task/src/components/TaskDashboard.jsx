import TaskList from "./TaskList";
import TaskListFilters from "./TaskListFilters";

const TaskDashboard = () => {
return (
    <>
    <h1> Welcone to dashboard</h1>
    <TaskListFilters />
    <TaskList />
    </>
)
}
export default TaskDashboard;