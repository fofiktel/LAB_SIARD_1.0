import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);


  return(
      <div className="container">
          <header
              className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">


              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                  <li>
                     <a href="/" className="nav-link px-2 link-secondary">Home {user && user.username}</a>

                  </li>

              </ul>

              <div className="col-md-3 text-end">
                  {user?<button  className="btn btn-primary" onClick={logoutUser}>Logout</button>:(
                      <><button onClick="document.location='/login'" type="button" className="btn btn-outline-primary me-1">
                          <a href="/login" className="nav-link px-2 link-dark">Login</a></button>
                      <button type="button" className="btn btn-primary">
                           <a href="/register" className="nav-link px-2 link-light">Sign up</a>
                      </button></>
                  )}

              </div>
          </header>
      </div>

  )
};

export default Navbar;
