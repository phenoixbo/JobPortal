import React, { useState } from "react";
import "../styles/styles.css";

function JobPostForm({ addJob }) {
  const [showPopup, setShowPopup] = useState(false);
  const [newJob, setNewJob] = useState({
    title: "",
    company: "",
    location: "",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewJob((prevJob) => ({
      ...prevJob,
      [name]: value,
    }));
  };

  const handlePostJob = (e) => {
    e.preventDefault();
    addJob(newJob);
    setNewJob({ title: "", company: "", location: "", description: "" });
    
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="post-job-container">
      <h2>Post a Job</h2>
      <form onSubmit={handlePostJob}>
        <input
          type="text"
          placeholder="Company Name"
          name="company"
          value={newJob.company}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Job Title"
          name="title"
          value={newJob.title}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder="Location"
          name="location"
          value={newJob.location}
          onChange={handleInputChange}
          required
        />
        <textarea
          placeholder="Job Description"
          name="description"
          value={newJob.description}
          onChange={handleInputChange}
          required
        ></textarea>
        <button type="submit">Post Job</button>
      </form>

      {showPopup && (
        <div className="popup-window">
          <div className="popup-content">
            <h3>🎉 Job Posted Successfully!</h3>
          </div>
        </div>
      )}
    </div>
  );
}

export default JobPostForm;

