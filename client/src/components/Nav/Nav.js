import { Outlet, Link } from "react-router-dom";
import "./Nav.css";

export default function Nav() {
  return (
    <div>
      <nav className="navbar">
        <a class="navbar-brand" href="#">
          P
        </a>
        <Link className="link nav-link" to="/Dashboard">
          Dashboard
        </Link>
        <Link className="link nav-link" to="/Explore">
          Explore
        </Link>
        <Link className="link nav-link" to="/Account">
          Account
        </Link>
      </nav>
      <Outlet />
    </div>
  );
}

<ul class="nav justify-content-center">
  <li class="nav-item">
    <a class="nav-link active" href="#">
      Active
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      Link
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">
      Link
    </a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#">
      Disabled
    </a>
  </li>
</ul>;
