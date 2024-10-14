function FilterButton({name, isActive}){
    return(
        <>
        <button className={isActive ? "btn active" : "btn"}>{name}</button>
        </>
    )
}

export default FilterButton;