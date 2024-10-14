import styles from "./styles/Task.module.css"
import TaskButton from "./TaskButton";

function Task({isCompleted, name}){
    return(
        <li className={styles.task}>
            <div>
                <input type="checkbox"/>
                <span className={isCompleted ? styles.completed : ""}>{name}</span>
            </div>
            <div className="task-button">
                <button className="btn">Modifica</button>
                <button className="btn">Elimina</button>
            </div>
        </li>
    )
}

export default Task;



{/* <TaskButton name={"Modifica"}/> */}
{/* <TaskButton name={"Elimina"}/> */}