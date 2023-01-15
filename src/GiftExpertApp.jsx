import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GiftExpertApp = () => {

    const [categories, setCategories] = useState(['Angelica'])
   
    const onAddCategory = ( newCategory) => {
        console.log(newCategory)
        if(newCategory.length <= 1) return
       if(categories.find(category => category.toUpperCase() == newCategory.toUpperCase() )) {
        console.log('categoría repetida');
        return
       }
       setCategories([newCategory, ...categories ])
      // setCategories((category) => [...category, newCategory])
    };
    //return <li key={category}>{category}</li>
  return (
    <>
    <h1>GiftExpertApp</h1>
   
    <AddCategory onAddCategory={onAddCategory}  />
    {categories.map((category) => 
    <div key={category}>
      <GifGrid  category={category}/>
      </div>
    )}

   
    </>
  )
}
