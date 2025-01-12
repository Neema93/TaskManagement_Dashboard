import { useParams, useNavigate } from "react-router-dom"; 
import { connect } from "react-redux";
import  TaskForm  from "./TaskForm"
import { editTask } from "../actions/tasks";
const EditTask = (props) => {
  const { id } = useParams();  
  const navigate = useNavigate();
  const task = props.tasks.find((task) => task.id === id); 
  const doStuff = () => navigate("/dashboard", { replace: true });
  return (
    <>
        <TaskForm
          task={task}  // Pass the expense to the form for editing
          onSubmit={(task) => {
            props.dispatch(editTask(id, task));  // Dispatch edit action
            doStuff();  // Redirect to dashboard
          }}
        />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
     tasks : state.tasks, 
  };

};

export default connect(mapStateToProps)(EditTask);
