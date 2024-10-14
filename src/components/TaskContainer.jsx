import TaskCounter from './TaskCounter';
import Task from './Task';
import styles from "./styles/TaskContainer.module.css"

function TaskContainer({taskList}){
    return(
        <>
        <TaskCounter taskNumber={taskList.length}/>
        <ul className={styles.taskContainer}>
            {taskList}
        </ul>
        </>
    )
}

export default TaskContainer;