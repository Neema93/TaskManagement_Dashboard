import { connect } from "react-redux";

import selectTask from "../selectors/tasks";
const TaskList =(props) => {
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
    const flatTasks = state.tasks[0] || [];
    return {
      tasks: selectTask(flatTasks, state.filters),
    };
  };
export default connect(mapStateToProps)(TaskList);