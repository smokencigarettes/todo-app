import styles from "./styles/Task.module.css"
import TaskButton from "./TaskButton";

function Task({task, deleteTask, toggleTaskCompletion}){

    let taskView = (
        <>
        <div>
            <input type="checkbox" checked={task.completed} onChange={()=> toggleTaskCompletion(task.id)}/>
            <span className={task.completed ? styles.completed : ""}>{task.name}</span>
        </div>
        <div className="task-button">
            <button className="btn">Modifica</button>
            <button className="btn" onClick={()=> deleteTask(task.id)}>Elimina</button>
        </div>
        </>
    )

    let taskEdit = (
        <>
        <form>
            <label htmlFor="">
                Modifica: {task.name}
            </label>
            <br/>
            <input type="text" 
                value=""
                onChange={() => null}
            />
        </form>
        <div className="task-button">
            <button className="btn">Cancella</button>
            <button className="btn" onClick={()=> editTask(task.id)}>Salva</button>
        </div>
        </>
    )
    return(
        <li className={styles.task}>
            {/* {taskView} */}
            {taskEdit}
        </li>
    )
}

export default Task;



{/* <TaskButton name={"Modifica"}/> */}
{/* <TaskButton name={"Elimina"}/> */}