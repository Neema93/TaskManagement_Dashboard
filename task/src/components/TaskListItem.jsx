const TaskListItem = ({title,description,deadline,status}) =>{
    return (
        <>
      <br/>
       <span> {title} - {description} - {deadline.toDateString()} -{status}</span>
        </>
    )
}
export default TaskListItem;