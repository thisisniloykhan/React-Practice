export default function MainContent() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];

  const ingredientsElement = ingredients.map((ingredient, index) => {
    return <li key={index}>{ingredient}</li>;
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newIngredient = formData.get("ingredient");
    console.log(newIngredient);
  }
  return (
    <main>
      <form action="" className="add-ingredient-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      <ul>{ingredientsElement}</ul>
    </main>
  );
}
