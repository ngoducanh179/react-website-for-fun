import React from 'react'
import './../App.css'
function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
        <a className="nav-link color2 " href="http://localhost:3000/#">Home</a>
        <a className="nav-link color2 " href="https://www.facebook.com/tom.anh.370">Facebook</a>
        <a className="nav-link color2 " href="#">Picture</a>
      </nav>
    </div>
  )
}

export default Navbar
