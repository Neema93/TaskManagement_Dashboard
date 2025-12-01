import { useState } from "react";
import { connect } from "react-redux";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
  const getTileContent = ({ date, view }) => {
  if (view === "month") {
    const tasksForDay = props.tasks.filter(
      (task) =>
        new Date(task.deadline).toDateString() === date.toDateString()
    );

    if (tasksForDay.length > 0) {
      return (
        <div className="task-tile-list">
          {/* {tasksForDay.length} */}
        {tasksForDay.slice(0, 5).map((task) => (
  <li key={task.id}>
    <strong>{task.title}</strong> - <span>{task.status}</span>
  </li>
))}
{tasksForDay.length > 5 && <li>...</li>}
        </div>
      );
    }
  }
  return null;
};

  return (
    <div className="cal-container">
      <div>
        <Calendar
          className="calendar"
          value={selectedDate}
          onChange={handleDateChange}
          tileClassName={getTileClassName}
          tileContent={getTileContent}
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
