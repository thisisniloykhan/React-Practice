export default function Jokes({ setup = null, punchline }) {
  return (
    <>
      <p>{setup}</p>
      <p>{punchline}</p>
    </>
  );
}
