import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="nav">
        <Link to="/" className="site-icon">
          <img src="\src\images\logo black.png" width={80} height={80}></img>
        </Link>
        <ul>
          <li className="active">
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/order">
              <button>Order</button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
