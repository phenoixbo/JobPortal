import Navbar from "../components/Navbar";
import JobList from "../components/JobList";
import "../styles/styles.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="home-container">
        <JobList />
      </div>
    </div>
  );
}

export default Home;
