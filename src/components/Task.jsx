import styles from "./styles/Task.module.css"

function Task(){
    return(
        <>
        <li className={styles.task}>
            <div>
            <input type="checkbox"/>
            <span>Studiare React</span>
            </div>
            <div className="task-button">
            <button>Modifica</button>
            <button>Elimina</button>
            </div>
        </li>
        <li className={styles.task}>
            <div>
            <input type="checkbox"/>
            <span>Studiare Javascript</span>
            </div>
            <div className="task-button">
            <button>Modifica</button>
            <button>Elimina</button>
            </div>
        </li>
        <li className={styles.task}>
            <div>
            <input type="checkbox"/>
            <span>Studiare Git</span>
            </div>
            <div className="task-button">
            <button>Modifica</button>
            <button>Elimina</button>
            </div>
        </li>
        </>
    )
}

export default Task;