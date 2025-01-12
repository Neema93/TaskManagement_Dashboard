import { connect } from "react-redux";
import { setTitleFilter, setStatusFilter } from "../actions/filters";

const TaskListFilters = (props) => (
  <div>
    <input
      className="input"
      type="text"
      value={props.filters.title}
      onChange={(e) => {
        props.dispatch(setTitleFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.status}
      onChange={(e) => {
        props.dispatch(setStatusFilter(e.target.value));
      }}
    >
      <option value="Pending">Pending</option>
      <option value="In Progress">In Progress</option>
      <option value="Completed">Completed</option>
    </select>
  </div>
);
const mapStateToProps = (state) => {
  console.log("filter", state)
  return {
    filters: state.filters,
  };
};
export default connect(mapStateToProps)(TaskListFilters);
