import { Link } from "react-router-dom"
import { ListCategory } from "./ListCategory"
export const Home = () =>{
    return(
        <>
        <header className="text-center py-2"> 
            <h1 className="text-6xl cursor-pointer font-medium">Box Assets </h1>
        </header>
        <main>
            <section >
                <ListCategory></ListCategory>
            </section>
        </main>
        </>
        
    )
}