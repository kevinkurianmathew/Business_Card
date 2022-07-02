import React from "react"

export default function Info(){
    return (
        <div className="info">
        <img className="info--img" src="./images/Photo.jpg"  />
        <h1> Kevin Kurian Mathew</h1>
        <h2> Frontend Developer</h2>
        <h3> kevinkm.website</h3>
        <div className="info--connect">
        <a
          className="info--connect__email"
          href="mailto:kevinkurianmathew@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <img className="info--connect__email__icon" src="./images/Mail.png" alt="Email" />
          <span>Email</span>
        </a>
        <a
          className="info--connect__linkedin"
          href="https://linkedin.com/kevinkm"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="info--connect__linkedin__icon"
            src="./images/linkedin.png"
            alt="Linkedin"
          />
          <span>LinkedIn</span>
        </a>
      </div>
        
        
        </div>
    )
}