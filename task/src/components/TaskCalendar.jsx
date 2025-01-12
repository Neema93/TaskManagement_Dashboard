import { useState } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const TaskCalendar = (props) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const tasksForDate = props.tasks.filter(
        (task) => new Date(task.deadline).toDateString() === selectedDate.toDateString()
      );
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
      const getTileClassName = ({ date }) => {
        // Check if there are tasks on this date
        const hasTasks = props.tasks.some(
          (task) => task.deadline.toDateString() === date.toDateString()
        );
        return hasTasks ? "highlight" : ""; // Apply highlight class if there are tasks
      };
    return(
        <>
          <div style={{ marginBottom: "20px", margin: '0 auto' }}>
        <Calendar value={selectedDate} onChange={handleDateChange} tileClassName={getTileClassName} />
      </div>
      <h3>Tasks for {selectedDate.toDateString()}</h3>
        {tasksForDate.length === 0 ? (
          <p>No tasks for this day.</p>
        ) : (
          <ul>
            {tasksForDate.map((task) => (
              <li key={task.id}>
                <p><strong>{task.title}</strong></p>
                <p>{task.description}</p>
                
              </li>
            ))}
          </ul>
        )}
        </>
    )

}
const mapStateToProps = (state) => {
    return {
      tasks: state.tasks,
    };
  };
export default connect(mapStateToProps)(TaskCalendar);