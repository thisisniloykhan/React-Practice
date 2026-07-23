import { useState } from "react";

export default function MainContent() {
  const [ingredients, setIngredients] = useState([]);

  const ingredientsElement = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
          required
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsElement}</ul>
    </main>
  );
}
