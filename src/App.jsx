import { useState, useEffect, useContext } from 'react';
import './App.css';
import FilterButtonContainer from './components/filter/FilterButtonContainer';
// import MainTodo from "./MainTodo"
import Form from './components/Form';
import Task from './components/task/Task';
import TaskContainer from './components/task/TaskContainer';
import { useTasks } from './TasksContext';

const FILTERS = {
  Tutti: ()=> true,
  Rimasti: task => !task.completed,
  Completati: task => task.completed
}

function App() {
  const [filter, setFilter] = useState("Tutti");
  const tasks = useTasks();

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])
  
  const taskList = tasks
  .filter(FILTERS[filter])
  .map(task =>(
    <Task
      key={task.id}
      task={task}
    />
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
