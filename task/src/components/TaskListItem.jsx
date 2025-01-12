const TaskListItem = ({title,description,deadline,status}) =>{
    return (
        <>
       <tr>
      <td>{title}</td>
      <td>{description}</td>
      <td>{deadline.toLocaleDateString()}</td>
      <td>{status}</td>
    </tr>
        </>
    )
}
export default TaskListItem;