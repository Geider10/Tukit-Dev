import {choiseData} from "./choiseData"
import { getResources } from "./choiseData"
import {Link} from "react-router-dom"
import { useState , useEffect} from "react"
export const ListCategory = ()=>{
    const [category, setCategory] = useState([]);
    const [resources, setResources] = useState([]);
    const [resourcesCopia, setResourcesCopia] = useState([]);

    
   useEffect(()=>{
        choiseData().then((res)=>{
        setCategory(res);
        })
   },[])
   useEffect(()=>{
        getResources().then((res)=>{
            setResources(res);
            setResourcesCopia(res);
        })
   },[])
    const selectCategory = (e)=>{
        const clickCate = e.target.innerText;
        console.log (clickCate)
        filterCategory(clickCate);
    }
    const filterCategory = (typeCategory)=>{
        if(typeCategory == "All"){
            setResources(resourcesCopia);
        }
        else{
            const newCategory = resourcesCopia.filter(cat => cat.category == typeCategory);
            setResources(newCategory);
        }
    }
    return ( 
       <>
        <section>
            {category.map((ele)=>(
                <Link to="/" key={ele.id} onClick={selectCategory} className="rounded-md bg-violet-400 px-2">{ele.nameCategory}</Link>
            ))}
        </section>
        <section>
            {resources.map((res)=>(
                <div key={res.id} className="rounded-xl bg-orange-400 w-64">
                    <h3 >{res.name}</h3>
                    <p>La categoria es: {res.category} </p>
                    <Link to={res.path}  className="cursor-pointer bg-green-400">Ver</Link>
                    <Link to={`/resource/`}className="cursor-pointer bg-green-400">Details</Link>
                </div>
            ))

            }
        </section>
       </>
    )
}