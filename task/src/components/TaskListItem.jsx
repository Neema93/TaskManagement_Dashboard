import { Link } from "react-router-dom";
const TaskListItem = ({ id,title, description, deadline, status }) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{description}</td>
        <td>{deadline.toDateString()}</td>
        <td>{status}</td>
        <td>
          
          <Link to={`/edit/${id}`}>Edit</Link>
        </td>
      </tr>
    </> 
  );
};
export default TaskListItem;
