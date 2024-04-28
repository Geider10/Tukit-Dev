import { Link } from "react-router-dom"

export const CartCategory =({carts})=>{
    return(
        <div className="bg-red-300 inline-block text-center border-2 rounded-xl inline-block">
            <img src={carts.img} alt={carts.name} className="w-64 overflow-" />
            <h3 className="text-xl">{carts.name}</h3>
            <Link to={carts.path} target="_blank" className="bg-green-500 px-2 rounded-sm cursor-pointer">Ver</Link>
        </div>
    )
}