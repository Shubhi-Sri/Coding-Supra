// ResourceList.js
import React from "react";
import ResourceCard from "./ResourceCard";
import "./ResourceList.css"; 

const ResourceList = () => {
  const resources = [
    {
      title: "Striver’s SDE Sheet",
      description: "Most famous SDE sheet covering DSA & coding interview prep.",
      link: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
    },
    {
      title: "Love Babbar 450 DSA Sheet",
      description: "DSA problems curated for coding interviews and placements.",
      link: "https://www.geeksforgeeks.org/dsa-sheet-by-love-babbar/",
    },
    {
      title: "Company-wise DSA Questions (GitHub)",
      description: "Collection of company-wise DSA questions for interview prep.",
      link: "https://github.com/krishnadey30/LeetCode-Questions-CompanyWise?fbclid=PAQ0xDSwLRhLpleHRuA2FlbQIxMAABp1XWkiTZL7a6CW6wRNsjpXkBHxo_DC4GNwx-e_PpCZb3XNaUnxT4XR9jSfXZ_aem_f1a7a1MAQAFKXEKTeeCN5g",
    },
    {
      title: "Leetcode Patterns",
      description: "Curated list of coding patterns for solving Leetcode questions.",
      link: "https://seanprashad.com/leetcode-patterns/",
    },
  ];

  return (
    <div>
      <p className="Title_place">Placement Preparation Resources</p>
      <div className="resource-list">
        {resources.map((res, index) => (
          <ResourceCard
            key={index}
            title={res.title}
            description={res.description}
            link={res.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourceList;
