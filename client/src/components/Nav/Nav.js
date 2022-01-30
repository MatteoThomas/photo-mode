import { Outlet, Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <nav className="nav">
        <h1></h1>
        <Link className="link" to="/Register">
          Register
        </Link>
        <br />
        <Link className="link" to="/Login">
          Login
        </Link>
        <br />
        <Link className="link" to="/Dashboard">
          Dashboard
        </Link>
        <br />
        {/* <Link className="link" to="/ImageUpload">
          Image Upload
        </Link> */}
      </nav>
      <Outlet />
    </div>
  );
}
