import TaskCounter from './TaskCounter';
import Task from './Task';
import styles from "../styles/TaskContainer.module.css"
import { useFilterTasks } from '../../TasksContext';

function TaskContainer({selectedFilter}){
    const taskList = useFilterTasks(selectedFilter);
    return(
        <>
        <TaskCounter taskNumber={taskList.length}/>
        {
            taskList.length > 0 ? (
            <ul className={styles.taskContainer}>
                {taskList.map(task =>(
                    <Task
                    key={task.id}
                    task={task}
                    />
                ))}
            </ul>) : (
                <h3>Nessun task in questa lista</h3>
            )
        }
        </>
    )
}

export default TaskContainer;