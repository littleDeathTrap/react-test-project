import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="header">
      <div>Logo</div>
      <nav>
        <NavLink to="/posts">PostsList</NavLink>
        <NavLink to="/home">Home</NavLink>
      </nav>
    </header>
  );
};
export default Header;