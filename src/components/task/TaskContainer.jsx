import TaskCounter from './TaskCounter';
import Task from './Task';
import styles from "../styles/TaskContainer.module.css"

function TaskContainer({taskList}){
    return(
        <>
        <TaskCounter taskNumber={taskList.length}/>
        {
            taskList.length > 0 ?
        <ul className={styles.taskContainer}>
            {taskList}
        </ul> :
        <h3>Nessun task in questa lista</h3>
        }
        </>
    )
}

export default TaskContainer;