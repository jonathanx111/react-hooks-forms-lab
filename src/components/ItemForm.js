import React, { useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [nameField, setNameField] = useState("")
  const [categorySelect, setCategorySelect] = useState("Produce")
  
  function handleNameChange(event) {
    setNameField(event.target.value)
  }

  function handleCategoryChange(event ){
    setCategorySelect(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    onItemFormSubmit({
      id: uuid(),
      name: nameField,
      category: categorySelect
    })
    setNameField("")  
  }
  
  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input value={nameField} onChange={handleNameChange} type="text" name="name" />
      </label>

      <label>
        Category:
        <select value={categorySelect} onChange={handleCategoryChange} name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
