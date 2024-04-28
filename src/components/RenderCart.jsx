import { useContext } from "react";
import { CartCategory } from "./CartCategory";
import { assetsContext } from "../context/assestsContext";

export const RenderCart = () => {
    const {render} = useContext(assetsContext);
    return(
        <section>
            {
                render && render.map((element)=>(
                    <CartCategory  carts={element} key={element.id}></CartCategory>
                ))
            }
        </section>
    )
}