// components/JobCard.jsx
import React from "react";

const JobCard = ({ job }) => {
  return (
    <div className="card">
      <h3>{job.title}</h3>
      <p>{job.description}</p>
      <div className="flex justify-around mt-4">
        <button className="btn-primary">Yes</button>
        <button className="btn-secondary">No</button>
      </div>
    </div>
  );
};

export default JobCard;
