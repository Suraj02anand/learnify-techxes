import React from 'react'
import './styles/NavBar.css'

function NavBar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg p-4" style={{backgroundColor:"#DEDCEB"}}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={require(`../assets/nav-logo.png`)} alt=""  height="36" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item mx-3">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link mx-auto mx-md-0" href="#">About</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link mx-auto mx-md-0" href="#">Blog</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link mx-auto mx-md-0" href="#">Courses</a>
              </li>
              <li className="nav-item mx-3">
                <a className="nav-link mx-auto mx-md-0" href="#">Resources</a>
              </li>
              <li className="nav-item mx-3">
                <button className="btn btn-dark px-4 py-2 border-0" style={{backgroundColor:"#4A318A"}}>Get Started</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar