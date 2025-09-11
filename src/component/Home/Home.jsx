import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='main'>
      <div className='upper'>
        <p className='upper-content'>
          Your one-stop hub for <strong>DSA preparation</strong>,
          <strong>placement resources</strong>, and <strong>web development learning</strong>.
          Whether you’re just starting your coding journey or sharpening your skills for
          top tech interviews, Coding Supra provides carefully curated content,
          practice material, and guidance to help you grow step by step.
        </p>
        <img src='/Home1.jpg'></img>

      </div>
      <div className="lower">
        <img src='/Home2.jpg'></img>
        <p className="lower-content">
          In today’s competitive tech world, having strong problem-solving skills
          and hands-on development experience is essential to stand out.
          Coding Supra helps you bridge the gap between theory and practice,
          ensuring you not only crack coding rounds but also build projects
          that showcase your real-world skills.
        </p>

      </div>
    </div>
  )
}

export default Home