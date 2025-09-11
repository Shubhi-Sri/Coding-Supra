import React from 'react'
import './Learn.css'
const Learn = () => {
  return (
    <div className='learn-main'>
        <div className="dsa-box">
            <img src='/DSA.jpg'></img>
            <button>DSA</button>
        </div>
        <div className="frontend-box">
            <img src='/Frontend.jpg'></img>
            <button>Frontend</button>
        </div>
        <div className="backend-box">
            <img src='/Backend.jpg'></img>
            <button>Backend</button>
        </div>
    </div>
  )
}

export default Learn