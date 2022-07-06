export default function Login({ handlekaro }) {
  return (
    <div>
      <h1>Welcome To LOgine Pgae</h1>
      <input type="text" placeholder="enter your username" />
      <input type="password" placeholder="enter password here" />

      <br />
      <br />
      <button onClick={handlekaro}>Logout</button>
    </div>
  );
}
