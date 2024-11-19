import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
    <header className="navbar">
        <div className="navbar__brand">
            <Link to='/'>My App</Link>
        </div>
        <nav className="navbar__links">
        <ul>
        <li>
          {" "}
          <Link to="/home">Home</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/about">About</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/product">Product</Link>{" "}
        </li>
        <li>
          {" "}
          <Link to="/contact">Contact</Link>{" "}
        </li>
      </ul>
        </nav>
    </header>

    <Outlet />
    
    </>
  );
};
