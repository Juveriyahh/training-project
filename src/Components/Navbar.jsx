import { Link } from "react-router-dom";

function Navbar() {
    return (  
        
        <nav className=" navbar bg-primary navbar-expand-lg bg-body-tertiary " data-bs-theme="dark">
<div className="container-fluid">
<Link className="navbar-brand" to="/">SprintIQ</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarSupportedContent">
  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
  
    <li>
    <form className="d-flex" role="search">
    <input className="form-control me-2" type="search" placeholder="What do you want to learn?" aria-label="Search"/>
    <button className="btn btn-outline-success" type="submit">Search</button>
  </form>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
        Courses
      </a>
      {/* <Link className="nav-link" to="/courses">Courses</Link> */}
      <ul className="dropdown-menu">
        <li><Link className="dropdown-item" to="/courses">Development</Link></li>
        <li><Link className="dropdown-item" to="/courses">Business</Link></li>
        <li><Link className="dropdown-item" to="/courses">IT & Software</Link></li>
        <li><Link className="dropdown-item" to="/courses">Personal Development</Link></li>
      </ul>
    </li>
    <li className="nav-item">
      {/* <a className="nav-link" href="#">Login</a> */}
      <Link className="nav-link" to="/">Home</Link>
    </li>
    <li className="nav-item">
      {/* <a className="nav-link" href="#">Login</a> */}
      <Link className="nav-link" to="/login">Login</Link>
    </li>
    <li className="nav-item">
      {/* <a className="nav-link" href="#">Register</a> */}
      <Link className="nav-link" to="/register">Register</Link>
    </li>
    <li className="nav-item">
      {/* <a className="nav-link" href="#">Register</a> */}
      <Link className="nav-link" to="/courses/mycourses">My Courses</Link>
    </li>

    {/* <li className="nav-item">
      // <a className="nav-link disabled" aria-disabled="true">Disabled</a>
    </li> */}
  </ul>

</div>
</div>
</nav>

    );
}

export default Navbar;