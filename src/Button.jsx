export default function Button({ children, eslohandlekaro }) {
  return (
    <div>
      <button onClick={eslohandlekaro}>{children}</button>
    </div>
  );
}
