import TaskCounter from './TaskCounter';
import Task from './Task';
import styles from "./styles/TaskContainer.module.css"

function TaskContainer(){
    return(
        <>
        <TaskCounter/>
        <ul className={styles.taskContainer}>
            <Task isCompleted={true}/>
            <Task/>
            <Task isCompleted={true}/>
            <Task/>
        </ul>
        </>
    )
}

export default TaskContainer;