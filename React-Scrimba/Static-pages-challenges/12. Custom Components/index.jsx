import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 *
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 *
 * Render the Page component.
 */

function Page() {
  return (
    <>
      <ol>
        <li>
          React is easier to write than vanilla js because it's easier to
          replicate the code
        </li>
        <li></li>
        <li></li>
      </ol>
    </>
  );
}

root.render(<Page />);
