import { useEffect, useRef, useState, useContext } from "react";
import styles from "../styles/Task.module.css"
import { TasksDispatchContext } from "../../TasksContext";

function Task({task}){
    const dispatch = useContext(TasksDispatchContext);

    const[isEditing, setIsEditing] = useState(false);
    const [newTaskName, setNewTaskName] = useState("");
    const editInputRef = useRef(null)

    useEffect(()=>{
        if(isEditing){
            setNewTaskName(task.name);
            editInputRef.current.focus();
        }
    }, [isEditing, task.name])

    function handleNewTaskName(e){
        setNewTaskName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        dispatch({
            type: "edited",
            name: newTaskName,
            id: task.id
          });
        setNewTaskName("");
        setIsEditing(false);
    }

    function handleDeleteTask(){
        dispatch({
            type: "deleted",
            id: task.id
        })
    }

    function handleToggleTaskCompletion(){
        dispatch({
            type: "toggled",
            id: task.id
        })
    }

    let taskView = (
        <>
        <div>
            <input type="checkbox" checked={task.completed} onChange={handleToggleTaskCompletion}/>
            <span className={task.completed ? styles.completed : ""}>{task.name}</span>
        </div>
        <div className="task-button">
            <button className="btn" onClick={()=> setIsEditing(true)}>Modifica</button>
            <button className="btn" onClick={handleDeleteTask}>Elimina</button>
        </div>
        </>
    )

    let taskEdit = (
        <>
        <form onSubmit={handleSubmit}>
            <input type="text" 
                value={newTaskName}
                onChange={handleNewTaskName}
                ref = {editInputRef}
            />
            <div className="task-button">
                <button className="btn">Annulla</button>
                <button className="btn" type="submit">Salva</button>
            </div>
        </form>
        </>
    )
    return(
        <li className={styles.task}>
                {isEditing ? taskEdit : taskView}
        </li>
    )
}

export default Task;