import { Link } from "react-router-dom";
import "../styles/styles.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Job Portal</h1>
      <Link to="/post-job" className="post-job-btn">Post a Job</Link>
    </nav>
  );
}

export default Navbar;
