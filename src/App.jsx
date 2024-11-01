import { useState, useEffect } from 'react';
import './App.css';
import FilterButtonContainer from './components/filter/FilterButtonContainer';
import Form from './components/Form';
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
        <TaskContainer selectedFilter={FILTERS[filter]}/>
      </div>
    </>
  )
}

export default App
