import { useContext } from "react";
import Button from "./Button";
import Login from "./Compoenents/Login";
import SignUp from "./Compoenents/SignUp";
import { AuthContext } from "./Context";
import "./styles.css";

export default function App() {
  const [Authentication, togglefunction] = useContext(AuthContext);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      {/* <Button eslohandlekaro={togglefunction}>Toggle</Button> */}
      {Authentication ? (
        <Login handlekaro={togglefunction} />
      ) : (
        <SignUp handlekaro={togglefunction} />
      )}
    </div>
  );
}
