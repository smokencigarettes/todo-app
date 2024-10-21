function tasksReducer(tasks, action){
    switch(action.type){
        case "added":{
            return [...tasks,
            {
                id: action.id,
                name: action.name,
                completed: false
            }
        ]}
            
        case "deleted":{
            return tasks.filter( task => task.id !== action.id);
        }

        case "edited":{
            return tasks.map(task => {
                if(task.id === action.id){
                  return {...task, name: action.name}
                }
                return task;
            });
        }
        
        case "toggled":{
            return tasks.map(task => {
                if(task.id === action.id){
                  return {...task, completed: !task.completed}
                }
                return task;
              });
        }
        
        default:{
            throw Error(`Azione non riconosciuta: ${action.type}`)
        }
    }
}

export default tasksReducer;