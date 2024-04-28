import {allCategorys} from "./choiseData"
import { useState , useEffect,useContext} from "react"
import { TagCategory } from "./TagCategory"
import { assetsContext } from "../context/assestsContext"
import { DetailsHome } from "./DetailsHome"
export const ListCategory = ()=>{
    const {filterRender} = useContext(assetsContext);

    const [category, setCategory] = useState([]);
    const [title, setTitle] = useState("");
    useEffect(()=>{
        setCategory(allCategorys());
   },[]) 

    const selectCategory = (e)=>{
        const clickCate = e.target.innerText;
        const newTitle = clickCate == "All"? "": clickCate;
        setTitle(newTitle);
        filterRender(newTitle);
        console.log(title)
    }
    return ( 
       <section className="text-center">
        <section className="flex gap-x-3 justify-center">
            {category.map((ele)=>(
                <TagCategory key={ele.id} change={selectCategory} tag={ele} ></TagCategory>
            ))}
        </section>
        <h3 className="text-2xl my-3">{title}</h3>
        {
            title == "" && (
                <DetailsHome></DetailsHome>
            )
        }
       </section>
    )
}