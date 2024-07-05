import React from 'react'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
      <>
          <div className="header_section">
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="logo"><a href="index.html"><img src="images/logo.png" /></a></div>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                                 
                <Link className="nav-link" to="/">Home</Link>
                                  
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/language">Language</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/event">Event</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <div className="login_text"><a href="#">Login</a></div>
            <div className="search_icon"><a href="#"><img src="images/search-icon.png" /></a></div>
          </form>
        </div>
      </nav>
    </div>
    {/*banner section start */}
    <div className="banner_section layout_padding">
      <div className="container">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <p className="banner_text">Language School</p>
              <h1 className="banner_taital">Any <br />language you wants</h1>
              <div className="read_bt"><a href="#">Read More</a></div>
            </div>
            <div className="carousel-item">
              <p className="banner_text">Language School</p>
              <h1 className="banner_taital">Any <br />language you wants</h1>
              <div className="read_bt"><a href="#">Read More</a></div>
            </div>
            <div className="carousel-item">
              <p className="banner_text">Language School</p>
              <h1 className="banner_taital">Any <br />language you wants</h1>
              <div className="read_bt"><a href="#">Read More</a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/*banner section end */}
  </div>
    </>
  )
}
