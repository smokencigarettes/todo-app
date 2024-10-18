import { useEffect, useRef, useState } from "react";
import styles from "./styles/Task.module.css"
import TaskButton from "./TaskButton";

function Task({task, deleteTask, editTask, toggleTaskCompletion}){
    const[isEditing, setIsEditing] = useState(false);
    const [newTaskName, setNewTaskName] = useState("");
    const editInputRef = useRef(null)

    useEffect(()=>{
        if(isEditing){
            editInputRef.current.focus();
        }
    }, [isEditing])

    function handleNewTaskName(e){
        setNewTaskName(e.target.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        editTask(task.id, newTaskName);
        setNewTaskName("");
        setIsEditing(false);
    }

    function handleEditing(){
        setIsEditing(false);
        setNewTaskName("");
    }

    let taskView = (
        <>
        <div>
            <input type="checkbox" checked={task.completed} onChange={()=> toggleTaskCompletion(task.id)}/>
            <span className={task.completed ? styles.completed : ""}>{task.name}</span>
        </div>
        <div className="task-button">
            <button className="btn" onClick={()=> setIsEditing(true)}>Modifica</button>
            <button className="btn" onClick={()=> deleteTask(task.id)}>Elimina</button>
        </div>
        </>
    )

    let taskEdit = (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">
                Modifica: {task.name}
            </label>
            <br/>
            <input type="text" 
                value={newTaskName}
                onChange={handleNewTaskName}
                ref = {editInputRef}
            />
            <div className="task-button">
                <button className="btn" onClick={handleEditing}>Annulla</button>
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



{/* <TaskButton name={"Modifica"}/> */}
{/* <TaskButton name={"Elimina"}/> */}