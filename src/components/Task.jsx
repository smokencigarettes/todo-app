import styles from "./styles/Task.module.css"
import TaskButton from "./TaskButton";

function Task({task, deleteTask, toggleTaskCompletion}){
    return(
        <li className={styles.task}>
            <div>
                <input type="checkbox" onChange={()=> toggleTaskCompletion(task.id)}/>
                <span className={task.isCompleted ? styles.completed : ""}>{task.name}</span>
            </div>
            <div className="task-button">
                <button className="btn">Modifica</button>
                <button className="btn" onClick={()=> deleteTask(task.id)}>Elimina</button>
            </div>
        </li>
    )
}

export default Task;



{/* <TaskButton name={"Modifica"}/> */}
{/* <TaskButton name={"Elimina"}/> */}