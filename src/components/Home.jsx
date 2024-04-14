import { Link } from "react-router-dom"
import { ListCategory } from "./ListCategory"
export const Home = () =>{
    return(
        <>
        <header className="text-center py-2"> 
            <Link to="/" className="text-xl cursor-pointer"> Home</Link>
        </header>
        <main>
            <section>
                <ListCategory></ListCategory>
            </section>
        </main>
        </>
        
    )
}