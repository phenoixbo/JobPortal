import React from "react";
import "../styles/styles.css";

function JobFilter({ setLocationFilter, setTitleFilter }) {
  const handleTitleFilterChange = (e) => {
    setTitleFilter(e.target.value);
  };

  const handleLocationFilterChange = (e) => {
    setLocationFilter(e.target.value);
  };

  const handleFilter = (e) => {
    e.preventDefault();
  };

  return (
    <form className="job-filter" onSubmit={handleFilter}>
      <input 
        type="text" 
        placeholder="Search Job Title..." 
        onChange={handleTitleFilterChange} 
      />
      <select onChange={handleLocationFilterChange}>
        <option value="All Locations">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="Chennai">Chennai</option>
      </select>
      <button type="submit">Filter</button>
    </form>
  );
}

export default JobFilter;
