import TaskCounter from './TaskCounter';
import Task from './Task';

function TaskContainer(){
    return(
        <>
        <TaskCounter/>
        <section className='task-container'>
            <Task/>
        </section>
        </>
    )
}

export default TaskContainer;