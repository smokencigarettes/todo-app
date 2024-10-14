import { useState } from "react";
import FilterButton from "./FilterButton";

function FilterButtonContainer(){
// const [isActive, setIsActive] = useState();
const isActive = "active"

    return(
        <div>
            <span>Filtra:</span>
            <FilterButton name={"Tutti"} isActive={isActive}/>
            <FilterButton name={"Rimasti"}/>
            <FilterButton name={"Completati"}/>
        </div>
    )
}

export default FilterButtonContainer;