
import './App.css';
import AppRoute from './router/AppRoute';
import configurestore from './store/configurestore';
function App() {
  const store = configurestore();
 const state = store.getState();
  return (
    <div className="App">
     <h1> Task Management</h1>
     <AppRoute />
    </div>
  );
}

export default App;
