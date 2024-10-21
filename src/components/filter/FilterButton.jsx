function FilterButton({name, isActive, setFilter}){
    return(
        <>
        <button
            className={isActive ? "btn active" : "btn"}
            onClick={()=> setFilter(name)}
        >
            {name}
        </button>
        </>
    )
}

export default FilterButton;