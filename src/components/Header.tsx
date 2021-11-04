import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link className="link" to={"/"}>
        <h1>GC Mad Libs</h1>
      </Link>
      <p>
        <Link to="/stories">See Saved Stories</Link>
      </p>
      <p>
        <Link to="/create-story">Create a New Story</Link>
      </p>
    </header>
  );
};

export default Header;
