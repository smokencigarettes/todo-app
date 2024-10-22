import FilterButton from "./FilterButton";

function FilterButtonContainer({setFilter, filters, filter}){

    const filterButtons = Object.keys(filters).map(name =>(
        <FilterButton
            key={name}
            name={name}
            isActive={name === filter}
            setFilter={setFilter}
        />
    ))

    return(
        <div>
            <span>Filtra:</span>
            {filterButtons}
        </div>
    )
}

export default FilterButtonContainer;