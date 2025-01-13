import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import { thunk } from "redux-thunk";
import authentication from "../reducers/authentication";
import filters from "../reducers/filters";
import tasks from "../reducers/tasks";
const configurestore = () => {
  const store = createStore(
    combineReducers({
      tasks,
      filters,
      authentication,
    }),
    applyMiddleware(thunk)
  );
  return store;
};
export default configurestore;
