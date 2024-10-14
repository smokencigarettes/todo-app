import { useState } from 'react';
import './App.css';
import FilterButtonContainer from './components/FilterButtonContainer';
// import MainTodo from "./MainTodo"
import Form from './components/Form';
import Task from './components/Task';
import TaskContainer from './components/TaskContainer';

const FILTERS = {
  Tutti: ()=> true,
  Rimasti: task => !task.completed,
  Completati: task => task.completed
}

function App({tasks}) {
  const [filter, setFilter] = useState("Tutti")
  
  const taskList = tasks
  .filter(FILTERS[filter])
  .map(task =>(
    <Task name={task.name} isCompleted={task.completed} key={task.id}/>
  ))

  return (
    <>
    <h1>I miei task</h1>
    <div className='task-app'>
      <Form/>
      <FilterButtonContainer
        setFilter={setFilter}
        filters={FILTERS}
        filter={filter}
      />
      <TaskContainer taskList={taskList}/>
    </div>
    </>
  )
}

export default App
