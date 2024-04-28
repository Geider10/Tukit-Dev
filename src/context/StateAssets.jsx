import { useState } from "react";
import { assetsContext } from "./assestsContext";
import { allAssets } from "../components/choiseData";
export const StateAssets = ({children})=>{
    const [render,setRender] = useState([]);
   
    const filterRender = (nameCategory)=>{
        if(nameCategory != " "){
            const newAssets = allAssets().filter(element => element.category == nameCategory);
            setRender(newAssets);
        }
        else{
            setRender();
        }
    }
    return(
        // va ser un provedor para toda la app
        <assetsContext.Provider value={{filterRender,render}}>
            {children}
        </assetsContext.Provider>
    )
}