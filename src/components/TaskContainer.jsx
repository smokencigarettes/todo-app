import TaskCounter from './TaskCounter';
import Task from './Task';
import styles from "./styles/TaskContainer.module.css"

function TaskContainer(){
    return(
        <>
        <TaskCounter/>
        <ul className={styles.taskContainer}>
            <Task/>
        </ul>
        </>
    )
}

export default TaskContainer;