import React from "react";
import JobPostForm from "../components/JobPostForm";
import "../styles/styles.css"; 

function PostJob() {
  return (
    <div className="post-job">
      <h2>Post a Job</h2>
      <JobPostForm />
    </div>
  );
}

export default PostJob;
