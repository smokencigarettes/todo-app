import { useState, useEffect } from 'react';
import './App.css';
import { nanoid } from 'nanoid'
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

function App(props) {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState("Tutti")

  useEffect(()=>{
    localStorage.setItem("tasks", JSON.stringify(tasks))
  },[tasks])
  
  const taskList = tasks
  .filter(FILTERS[filter])
  .map(task =>(
    <Task
      key={task.id}
      task={task}
      deleteTask={deleteTask}
      editTask={editTask}
      toggleTaskCompletion={toggleTaskCompletion}
    />
  ))

  function addTask(name){
    const newTask = {
      id: nanoid(),
      name,
      completed: false
    }
    setTasks([...tasks, newTask])
  }

  function deleteTask(id){
    const remainingTask = tasks.filter( task => task.id !== id);
    setTasks(remainingTask)
  }

  function editTask(id, newName){
    const editedTasks = tasks.map(task => {
      if(task.id === id){
        return {...task, name: newName}
      }
      return task;
    });
    setTasks(editedTasks)
  }

  function toggleTaskCompletion(id){
    const updatedTasks = tasks.map(task => {
      if(task.id === id){
        return {...task, completed: !task.completed}
      }
      return task;
    });
    setTasks(updatedTasks)
  }

  return (
    <>
    <h1>I miei task</h1>
    <div className='task-app'>
      <Form addTask={addTask}/>
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
