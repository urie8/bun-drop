import { Link, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-icon">
          <img src="\src\images\logo black.png" width={80} height={80}></img>
        </Link>
        <ul>
          <CustomLink to="/menu">Menu</CustomLink>
          <CustomLink to="/login">Login</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          <CustomLink to="/order">Order</CustomLink>
        </ul>
      </nav>
    </>
  );
}

// Checks if the current page matches and sets it to active
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default Navbar;
