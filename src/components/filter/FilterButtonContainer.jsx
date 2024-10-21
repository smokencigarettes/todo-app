import { useState } from "react";
import FilterButton from "./FilterButton";

function FilterButtonContainer({setFilter, filters, filter}){
    
    // const [isActive, setIsActive] = useState();
    const filterButtons = Object.keys(filters).map(name =>(
        <FilterButton
            key={name}
            name={name}
            isActive={name === filter}
            setFilter={setFilter}
        />
    ))

    const isActive = "active"

    return(
        <div>
            <span>Filtra:</span>
            {filterButtons}
        </div>
    )
}

export default FilterButtonContainer;