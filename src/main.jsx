import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


let taskList = JSON.parse(localStorage.getItem("tasks")) || []

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={taskList}/>
  </StrictMode>,
)
