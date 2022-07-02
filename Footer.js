import React from "react"

export default function Footer(){
    return (
        <div className="footer">
          <a
        className="footer--links"
        href="https://twitter.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src="./images/Twitter.png" alt="Twitter" />
      </a>
        
      <a
        className="footer--links"
        href="https://facebook.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src="./images/Facebook.png" alt="Facebook" />
      </a>

      <a
        className="footer--links"
        href="https://instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src="./images/Instagram.png" alt="Instagram" />
      </a>

      <a
        className="footer--links"
        href="https://github.com/"
        target="_blank"
        rel="noreferrer"
      >
        <img className="footer--links__icon" src="./images/GitHub.png" alt="Github" />
      </a>
    
        </div>
       
        
        
        
    )
}