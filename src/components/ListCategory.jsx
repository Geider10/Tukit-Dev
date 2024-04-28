import {allCategorys} from "./choiseData"
import { useState , useEffect,useContext} from "react"
import { TagCategory } from "./TagCategory"
import { assetsContext } from "../context/assestsContext"

export const ListCategory = ()=>{
    const {filterRender} = useContext(assetsContext);

    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState("");
    useEffect(()=>{
        setCategory(allCategorys());
   },[]) 

    const selectCategory = (e)=>{
        const clickCate = e.target.innerText;
        const newTitle = clickCate == "All"? " ": clickCate;
        setTitle(newTitle);
        filterRender(newTitle);
    }
    return ( 
       <>
        <section>
            {category.map((ele)=>(
                <TagCategory key={ele.id} change={selectCategory} tag={ele}></TagCategory>
            ))}
        </section>
        <h3>{title}</h3>
       </>
    )
}