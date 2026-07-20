import ReactDOM from "react-dom/client";

function App() {
  function handleClick() {
    console.log("I was clicked!");
  }
  function handleMouseEnter() {
    console.log("Mouse Hovered");
  }
  /**
   * Challenge: add our new function to the button
   */

  return (
    <main className="container">
      <img
        src="https://picsum.photos/640/360"
        alt="Placeholder image from Picsum"
        onMouseEnter={handleMouseEnter}
      />
      <button onClick={handleClick}>Click me</button>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
