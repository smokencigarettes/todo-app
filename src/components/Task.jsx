function Task(){
    return(
        <>
        <div className='checkbox'>
            <input type="checkbox"/>Studiare React
            <button>Modifica</button>
            <button>Elimina</button>
        </div>
        <div className='checkbox'>
            <input type="checkbox"/>Studiare Javascript
            <button>Modifica</button>
            <button>Elimina</button>
        </div>
        <div className='checkbox'>
            <input type="checkbox"/>Studiare Git
            <button>Modifica</button>
            <button>Elimina</button>
        </div>
        </>
    )
}

export default Task;