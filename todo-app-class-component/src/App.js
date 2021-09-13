import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <TodoList />
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
}

export default App;
