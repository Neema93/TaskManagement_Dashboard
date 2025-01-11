
import './App.css';
import {Provider} from 'react-redux';
import AppRoute from './router/AppRoute';
import configurestore from './store/configurestore';

function App() {
  const store = configurestore();
 const state = store.getState();
  return (
    <div className="App">
     <h1> Task Management</h1>
     <Provider store={store}>
     <AppRoute />
     </Provider>
    </div>
  );
}

export default App;
