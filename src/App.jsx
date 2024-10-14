import './App.css';
import FilterButtonContainer from './components/FilterButtonContainer';
// import MainTodo from "./MainTodo"
import Form from './components/Form';
import TaskContainer from './components/TaskContainer';

function App() {

  return (
    <>
    <h1>I miei task</h1>
    <div className='task-app'>
      <Form/>
      <FilterButtonContainer/>
      <TaskContainer/>
    </div>
    </>
  )
}

export default App
