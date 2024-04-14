import dataLocal from "../data/dataLocal.json";
export const choiseData =( )=>{
    return new Promise ((resolve, reject)=>{
        resolve(dataLocal.categorys);
    })
}
export const getResources = () =>{
    return new Promise ((resolve, reject)=>{
        resolve(dataLocal.tools);
    })
}