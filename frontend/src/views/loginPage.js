import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const LoginPage = () => {
  const {loginUser} = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    loginUser(username, password);

  };

  return (

      <main className="form-signin w-100 m-auto">
        <form onSubmit={handleSubmit}>

            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input type="text" className="form-control" id="username" placeholder="name@example.com"/>
                <label htmlFor="username">Username</label>
            </div>

            <div className="form-floating">
              <input type="password" className="form-control" id="password" placeholder="Password"/>
                <label htmlFor="password">Password</label>
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

        </form>
      </main>

  );
};

export default LoginPage;
