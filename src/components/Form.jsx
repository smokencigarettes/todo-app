import { useState, useRef, useContext } from "react";
import { TasksDispatchContext } from "../TasksContext";
import { nanoid } from "nanoid";


function Form(){
    const dispatch = useContext(TasksDispatchContext);
    // const [name, setName] = useState("")
    const inputRef= useRef()

    function handleAddTask(e){
        dispatch({
            type: "added",
            id: nanoid(),
            name: inputRef.current.value
        })
        // setName(e.target.value)
        // addTask(inputRef.current.value)
    }

    return(
        <>
        <h4>Che cosa devi fare?</h4>
        {/* <input type="text" value={name} onChange={handleAddTask}/> */}
        {/* <button className="btn" onClick={()=> addTask()}>Aggiungi</button> */}
        <input type="text" ref={inputRef} />
        <button className="btn" onClick={()=> handleAddTask()}>Aggiungi</button>
        </>
    )
}

export default Form;