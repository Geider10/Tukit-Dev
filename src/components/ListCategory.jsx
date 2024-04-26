import {allCategorys} from "./choiseData"
import {allAssets } from "./choiseData"
import {Link} from "react-router-dom"
import { useState , useEffect} from "react"
import { CartCategory } from "./CartCategory"

export const ListCategory = ()=>{
    const [category, setCategory] = useState([]);
    const [assets, setAssets] = useState([]);
    const [title, setTitle] = useState("");
   useEffect(()=>{
        // allCategorys.then((res)=>{
        // setCategory(res);
        // })
        setCategory(allCategorys());
   },[]) 

    const selectCategory = (e)=>{
        const clickCate = e.target.innerText;
        console.log(clickCate);
        filterCategory(clickCate);
        setTitle(clickCate);
    }
    const filterCategory = (typeCategory)=>{
        if(typeCategory == "---"){
           setAssets()
        }
        else{
            const newCategory =  allAssets().filter(cat => cat.category == typeCategory);
            setAssets(newCategory);
        }
    }
    return ( 
       <>
        <section>
            {category.map((ele)=>(
                <Link to="/" key={ele.id} onClick={selectCategory} className="rounded-md bg-violet-400 px-2">{ele.nameCategory}</Link>
            ))}
        </section>
        <h3>{title}</h3>
        <section> 
            {assets && assets.map((res)=>(
                <CartCategory carts={res} key={res.id}></CartCategory>
            ))
            }
        </section>
       </>
    )
}