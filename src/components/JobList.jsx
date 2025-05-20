import { useState } from "react";
import JobCard from "./JobCard";
import JobFilter from "./JobFilter";
import SearchBar from "./SearchBar";  
import "../styles/styles.css";

const jobData = [
  { id: 1, title: "Estimation Engineer", company: "Dronainfra Consultant Pvt. Ltd.", location: "Remote", description: "Develop procurement strategies, estimate project costs, and manage budgets." },
  { id: 2, title: "Customer Support Engineer", company: " Niswey", location: "Chennai", description: "Provide technical support and collaborate with customer service teams" },
  { id: 3, title: "Director, Software Engineering", company: "Indeed", location: "Remote", description: "Lead software teams, analyze data, and drive product growth." },
  { id: 4, title: "AI Engineer", company: " Statfinity Pvt. Ltd", location: "Remote", description: "Develop advanced chatbots using Google Cloud and integrate APIs." },
  { id: 5, title: "Artificial Intelligence Engineer", company: "QualSights India Pvt. Ltd", location: "Remote", description: "Manage AI operations, enhance pipelines, and analyze large datasets" },
  { id: 6, title: "Development Engineer (SQL)", company: "Spektra Systems LLC", location: "Remote", description: "Develop SQL-based solutions and support flagship software products" },
  { id: 7, title: "L1 & L2 Support Engineer ", company: "Act2hire", location: "Remote", description: " Provide technical support and troubleshoot remote connectivity issues." },
  { id: 8, title: "SOC Engineer L1/L2", company: "Aliqan Technologies", location: "Remote", description: "Monitor security events and maintain endpoint protection systems" },
  { id: 9, title: "Quality Assurance Engineer", company: "Spiralyze", location: "Remote", description: " Execute test plans, ensure product quality, and collaborate with developers.." },
  { id: 10, title: "Manual Test Engineer ", company: "TotHR Solutions", location: "Remote", description: ": Identify test scenarios and apply different testing methodologies" },
  { id: 11, title: "Civil Engineer", company: "MODI INFRA SOLUTION", location: "Remote", description: "Conduct site surveys, use total stations, and manage construction plans" },
  { id: 12, title: "Subject Matter Expert (Civil Engineering) ", company: "Go Ask Now Tech Pvt. Ltd", location: "Remote", description: " Provide civil engineering expertise and answer technical queries." },
  { id: 13, title: "Mechanical Engineer", company: "MERIDIAN INTERNATIONAL", location: "Remote", description: "Work with mechanical design and cutting-edge laser processing technology." },
  { id: 14, title: "MEP (HVAC+Plumbing) Engineer", company: "HomeWork", location: "Remote", description: "Design HVAC and plumbing systems using Revit and ensure compliance." },
  { id: 15, title: "MEP Design Engineer (Freelancer)", company: "MechCraft Designs", location: "Remote", description:" Design mechanical, electrical, and plumbing (MEP) systems for buildings" },
];

function JobList() {
  const [jobs, setJobs] = useState(jobData);
  const [searchQuery, setSearchQuery] = useState("");  
  const [locationFilter, setLocationFilter] = useState("All Locations");
  const [titleFilter, setTitleFilter] = useState("");  

  const filteredJobs = jobs.filter(job => 
    (job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.company.toLowerCase().includes(searchQuery.toLowerCase()) || 
    job.location.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (locationFilter === "All Locations" || job.location === locationFilter) &&
    (job.title.toLowerCase().includes(titleFilter.toLowerCase()))
  );

  return (
    <div className="job-list-container">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <JobFilter setLocationFilter={setLocationFilter} setTitleFilter={setTitleFilter} />
      
      {/* If no jobs match the search, show a "No results found" message */}
      {filteredJobs.length === 0 ? (
        <div className="no-results">
          <p>No job listings match your search.</p>
        </div>
      ) : (
        filteredJobs.map(job => <JobCard key={job.id} job={job} />)
      )}
    </div>
  );
}

export default JobList;
