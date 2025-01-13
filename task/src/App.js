
import './App.css';
import { Provider } from 'react-redux';
import AppRoute from './router/AppRoute';
import configurestore from './store/configurestore';
import getVisibleTasks from './selectors/getVisibleTasks'
function App() {
  const store = configurestore();
  const state = store.getState();
  getVisibleTasks(state.tasks, state.filters)
  return (
    <div className="App">

      <Provider store={store}>
        <AppRoute />
      </Provider>
    </div>
  );
}

export default App;
