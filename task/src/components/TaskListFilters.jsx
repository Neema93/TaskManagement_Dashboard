import { connect } from "react-redux";
import { setTitleFilter, setStatusFilter } from "../actions/filters";

const TaskListFilters = (props) => (
  <div>
    <select
      value={props.filters.status}
      onChange={(e) => {
        props.dispatch(setStatusFilter(e.target.value));
      }}
    >
      <option value="All">All</option>
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
    <input
      className="input"
      type="text"
      value={props.filters.title}
      onChange={(e) => {
        props.dispatch(setTitleFilter(e.target.value));
      }}
    />
  </div>
);
const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(TaskListFilters);
