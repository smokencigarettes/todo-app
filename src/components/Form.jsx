import { useState, useRef } from "react";

function Form({addTask}){
    // const [name, setName] = useState("")
    const inputRef= useRef()

    function handleAddTask(e){
        // setName(e.target.value)
        addTask(inputRef.current.value)
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