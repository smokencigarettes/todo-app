import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TasksProvider} from './TasksContext';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TasksProvider>
      <App/>
    </TasksProvider>
  </StrictMode>,
)
