import { createContext, useReducer, useContext } from "react";
import tasksReducer from './tasksReducer';

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);


let initialData = JSON.parse(localStorage.getItem("tasks")) || []

function TasksProvider({children}){
    const [tasks, dispatch] = useReducer(tasksReducer, initialData);
    return(
        <TasksContext.Provider value={tasks}>
            <TasksDispatchContext.Provider value={dispatch}>
                {children}
            </TasksDispatchContext.Provider>
        </TasksContext.Provider>
    )
}

function useTasks(){
    return useContext(TasksContext)
}

export {TasksProvider, useTasks};