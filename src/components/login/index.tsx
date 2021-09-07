import { FunctionalComponent, h } from "preact";
import { useState } from "preact/hooks";
import { user } from "../../user";

const Login: FunctionalComponent = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  return (
    <span>
      <label>Username</label>
      <input />
      <label>Password</label>
      <input />
      <button>Login</button>
      <button>Sign Up</button>
    </span>
  );
};

export default Login;
