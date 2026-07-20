export default function MainContent() {
  return (
    <main>
      <form action="" className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredient</button>
      </form>
    </main>
  );
}
