export const TagCategory = ({change, tag}) =>{
    return <span onClick={change} className="rounded-md bg-violet-400 px-2 cursor-pointer">{tag.nameCategory}</span>
}