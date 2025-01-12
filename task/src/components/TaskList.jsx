import { connect } from "react-redux";
import TaskListItem from "./TaskListItem";
import getVisibleTasks from "../selectors/getVisibleTasks";
import tasks from "../reducers/tasks";
const TaskList =(props) => {
    console.log("props",props);
    const { tasks } = props;
    return (
      <div>
       {tasks.map((task) => {
        return <TaskListItem key={task.id} {...task} />;
      })} 
    </div> 
    );
}
const mapStateToProps = (state) => {
    return {
      tasks: getVisibleTasks(state.tasks, state.filters),
    };
  };
export default connect(mapStateToProps)(TaskList);