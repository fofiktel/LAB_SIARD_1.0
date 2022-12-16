import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const { registerUser } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    registerUser(username, password, password2);
  };

  return (
    <main className="form-signin w-100 m-auto">
      <form onSubmit={handleSubmit}>
        <h1 className="h3 mb-3 fw-normal">Register</h1>
        <div className="form-floating">

          <input
            type="text"
            id="username"
            onChange={e => setUsername(e.target.value)}
            placeholder="Username"
            required
            className="form-control"
          />
          <label htmlFor="username">Username</label>
        </div>
        <div className="form-floating">

          <input
            type="password"
            id="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="Password"
            required
            className="form-control"
          />
          <label htmlFor="password">Password</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            id="confirm-password"
            onChange={e => setPassword2(e.target.value)}
            placeholder="Confirm Password"
            required
            className="form-control"
          />
          <label htmlFor="confirm-password">Confirm Password</label>
          <p>{password2 !== password ? "Passwords do not match" : ""}</p>
        </div>
        <button className="w-100 btn btn-lg btn-primary">Register</button>
      </form>
    </main>
  );
}

export default Register;
