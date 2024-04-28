import { ListCategory } from "./ListCategory"
import { RenderCart } from "./RenderCart"
export const Home = () =>{
    return(
        <>
        <header className="text-center py-2"> 
            <h1 className="text-6xl cursor-pointer font-medium">Box Assets </h1>
        </header>
        <main>
            <ListCategory></ListCategory>
            <RenderCart></RenderCart>
        </main>
        </>
        
    )
}