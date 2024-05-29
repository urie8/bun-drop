import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <nav className="nav">
        <a href="/" className="site-icon">
          <img src="\src\images\logo black.png" width={80} height={80}></img>
        </a>
        <ul>
          <li className="active">
            <a href="/menu">Menu</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/order">
              <button>Order</button>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
