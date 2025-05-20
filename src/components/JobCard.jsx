import { Link } from "react-router-dom";
import "../styles/styles.css";

function JobCard({ job }) {
  return (
    <div className="job-card">
      <h3>{job.title}</h3>
      <p><strong>{job.company}</strong> - {job.location}</p>
      <p>{job.description}</p>
      <Link to={`/job/${job.id}`} className="apply-btn">Apply</Link>
    </div>
  );
}

export default JobCard;
