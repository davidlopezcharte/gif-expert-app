import { useState } from "react"

export const AddCategory = ({onAddCategory}) => {
    
    const [newCategory, setNewCategory] = useState('')

    const onInputChange = (e) => {
        setNewCategory(e.target.value)

    };

    const onSubmit = (e) => {
        e.preventDefault()
        onAddCategory(newCategory)
        setNewCategory('')
    };


  return (
    <>
    <form onSubmit={onSubmit}>
        <input type="text" placeholder="Añade una categoría" onChange={ onInputChange} value={newCategory} name={newCategory}/>
    </form>
    </>
  )
}
