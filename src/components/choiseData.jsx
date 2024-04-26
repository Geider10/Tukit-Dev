import dataLocal from "../data/dataLocal.json";
export const allCategorys =()=>{
    // return new Promise ((resolve, reject)=>{
    //     resolve(dataLocal.categorys);
    // })
    return dataLocal.categorys;
}
export const allAssets = () =>{
    return dataLocal.assets;
}
