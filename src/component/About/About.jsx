import React from 'react'
import "./About.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function About() {
    return (
        <div className='About'>
            <div className='social-icons'>
                <a
                    href="https://github.com/Shubhi-Sri/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://linkedin.com/in/shubhi-srivastava-445010229/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>
                <a href="mailto:shubhisrivastavaofficial11@gmail.com" 
                target="_blank"
                    rel="noreferrer">
                    <FaEnvelope />
                </a>
            </div>
            <div className='Description'>
                <p>
                    Welcome to <span className="highlight">Coding Supra</span>, your one-stop
                    resource hub for coding interview preparation. Our goal is to help students
                    and developers prepare for placements by providing curated resources, DSA
                    sheets, company-wise questions, and interview strategies.
                </p>

            </div>
            <div className='List-item'>
            <ul>
                <li>Coding Supra</li>
                <li>DSA</li>
                <li>Frontend Development</li>
                <li>Backend Development</li>
                <li>Resources</li>
                <li>Placement Preparation</li>
            </ul>
            </div>
        </div>
    )
}

export default About