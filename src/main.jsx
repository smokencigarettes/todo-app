import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


let taskList = [
  {
      id: 1,
      name: "Studiare React",
      completed: false
  },
  {
      id: 2,
      name: "Studiare Javascript",
      completed: true
  },
  {
      id:3,
      name: "Studiare Git",
      completed: true
  },
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App tasks={taskList}/>
  </StrictMode>,
)
