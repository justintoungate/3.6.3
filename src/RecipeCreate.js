import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  
  // const [name, setName] = useState("");
  // const [cuisine, setCuisine] = useState("");
  // const [photo, setPhoto] = useState("");
  // const [rating, setRating] = useState("");
  // const [ingredients, setIngredients] = useState("");
  // const [preparation, setPreparation] = useState("");
  
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  }
  const [formData, setFormData] = useState({...initialFormState});

  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value
    })
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    createRecipe(formData);
    setFormData({...initialFormState})
  }


  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" required={true} onChange={handleChange} value={formData.name}/>
            </td>
            <td>
            <label htmlFor="cuisine">Cuisine: </label>
            <input id="cuisine" name="cuisine" required={true} onChange={handleChange} value={formData.cuisine}/>
            </td>
            <td>
            <label htmlFor="photo">Photo: </label>
            <input id="photo" name="photo" required={true} onChange={handleChange} value={formData.photo}/>
            </td>
            <td>
            <label htmlFor="ingredients">Ingredients: </label>
            <textarea id="ingredients" name="ingredients" required={true} onChange={handleChange} value={formData.ingredients}/>
            </td>
            <td>
            <label htmlFor="preparation">Preparation: </label>
            <textarea id="preparation" name="preparation" required={true} onChange={handleChange} value={formData.preparation}/>
            </td>

            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
