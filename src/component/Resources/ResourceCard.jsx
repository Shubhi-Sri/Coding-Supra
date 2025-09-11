// ResourceCard.js
import React from "react";
import "./ResourceCard.css";

const ResourceCard = ({ title, description, link }) => {
  return (
    <div className="resource-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Visit Resource
      </a>
    </div>
  );
};

export default ResourceCard;
