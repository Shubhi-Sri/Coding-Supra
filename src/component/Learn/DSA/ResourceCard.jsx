import React from 'react'
import "./ResourceCard.css";
function ResourceCard({ title, img, link }) {
  return (
    <div>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="resource-card"
    >
      <img src={img} alt={title} className="resource-img" />
      <div className="resource-title">{title}</div>
    </a>
    </div>
  )
}

export default ResourceCard;