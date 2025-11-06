import { useState } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
// import "./../style/TaskCalendar.scss";
const TaskCalendar = (props) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const tasksForDate = props.tasks.filter(
    (task) =>
      new Date(task.deadline).toDateString() === selectedDate.toDateString()
  );
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const getTileClassName = ({ date }) => {
    const hasTasks = props.tasks.some(
      (task) => task.deadline.toDateString() === date.toDateString()
    );
    return hasTasks ? "highlight" : "";
  };
  return (
    <div className="cal-container">
      <div>
        <Calendar
          className="calendar"
          value={selectedDate}
          onChange={handleDateChange}
          tileClassName={getTileClassName}
        />
      </div>
      <div className="task-list">
        <h3>Tasks for {selectedDate.toDateString()}</h3>
        {tasksForDate.length === 0 ? (
          <p>No tasks for this day.</p>
        ) : (
          <ul>
            {tasksForDate.map((task) => (
              <li key={task.id}>
                <span>
                  <strong>{task.title}</strong>
                </span>{" "}
                - <span>{task.description}</span> - <span>{task.status}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
  };
};
export default connect(mapStateToProps)(TaskCalendar);
