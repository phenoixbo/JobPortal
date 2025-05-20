import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/styles.css";

const jobData = [
  { id: 1, title: "Estimation Engineer", company: "Dronainfra Consultant Pvt. Ltd.", location: "Remote", description: "Develop procurement strategies, estimate project costs, and manage budgets." },
  { id: 2, title: "Customer Support Engineer", company: "Niswey", location: "Chennai", description: "Provide technical support and collaborate with customer service teams" },
  { id: 3, title: "Director, Software Engineering", company: "Indeed", location: "Remote", description: "Lead software teams, analyze data, and drive product growth." },
  { id: 4, title: "AI Engineer", company: "Statfinity Pvt. Ltd", location: "Remote", description: "Develop advanced chatbots using Google Cloud and integrate APIs." },
  { id: 5, title: "Artificial Intelligence Engineer", company: "QualSights India Pvt. Ltd", location: "Remote", description: "Manage AI operations, enhance pipelines, and analyze large datasets" },
  { id: 6, title: "Development Engineer (SQL)", company: "Spektra Systems LLC", location: "Remote", description: "Develop SQL-based solutions and support flagship software products" },
  { id: 7, title: "L1 & L2 Support Engineer", company: "Act2hire", location: "Remote", description: "Provide technical support and troubleshoot remote connectivity issues." },
  { id: 8, title: "SOC Engineer L1/L2", company: "Aliqan Technologies", location: "Remote", description: "Monitor security events and maintain endpoint protection systems" },
  { id: 9, title: "Quality Assurance Engineer", company: "Spiralyze", location: "Remote", description: "Execute test plans, ensure product quality, and collaborate with developers." },
  { id: 10, title: "Manual Test Engineer", company: "TotHR Solutions", location: "Remote", description: "Identify test scenarios and apply different testing methodologies" },
  { id: 11, title: "Civil Engineer", company: "MODI INFRA SOLUTION", location: "Remote", description: "Conduct site surveys, use total stations, and manage construction plans" },
  { id: 12, title: "Subject Matter Expert (Civil Engineering)", company: "Go Ask Now Tech Pvt. Ltd", location: "Remote", description: "Provide civil engineering expertise and answer technical queries." },
  { id: 13, title: "Mechanical Engineer", company: "MERIDIAN INTERNATIONAL", location: "Remote", description: "Work with mechanical design and cutting-edge laser processing technology." },
  { id: 14, title: "MEP (HVAC+Plumbing) Engineer", company: "HomeWork", location: "Remote", description: "Design HVAC and plumbing systems using Revit and ensure compliance." },
  { id: 15, title: "MEP Design Engineer (Freelancer)", company: "MechCraft Designs", location: "Remote", description: "Design mechanical, electrical, and plumbing (MEP) systems for buildings" },
];

function JobDetails() {
  const { id } = useParams();
  const job = jobData.find((job) => job.id === parseInt(id));
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "" });

  if (!job) return <h2>Job not found</h2>;

  const handleApplyClick = () => {
    setShowForm(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You have successfully applied for the job: ${job.title}!`);
    setShowForm(false);
    setFormData({ name: "", email: "" }); // reset form
  };

  return (
    <div className="job-details-container">
      <h2>{job.title}</h2>
      <h3>{job.company} - {job.location}</h3>
      <p>{job.description}</p>

      {!showForm ? (
        <button className="apply-btn" onClick={handleApplyClick}>
          Apply Now
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="apply-form">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      )}
    </div>
  );
}

export default JobDetails;
