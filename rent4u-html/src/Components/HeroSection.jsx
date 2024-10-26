import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css"; // Your custom styles (optional)

class HeroSection extends Component {
  openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  };

  closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  };

  render() {
    return (
      <div className="hero_area">
        {/* Header Section */}
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Rent4u</span>
              </a>
              <div className="navbar-collapse">
                <div className="user_option">
                  <a href="/">Login</a>
                </div>
                <div className="custom_menu-btn">
                  <button onClick={this.openNav}>
                    <span className="s-1"> </span>
                    <span className="s-2"> </span>
                    <span className="s-3"> </span>
                  </button>
                </div>
                <div id="myNav" className="overlay">
                  <button className="closebtn" onClick={this.closeNav}>
                    &times;
                  </button>
                  <div className="overlay-content">
                    <a href="index.html">Home</a>
                    <a href="about.html">About</a>
                    <a href="car.html">Cars</a>
                    <a href="blog.html">Blog</a>
                    <a href="contact.html">Contact Us</a>
                    <a href="#">Login</a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        {/* Slider Section */}
        <section className="slider_section position-relative">
          <div className="slider_container">
            <div className="img-box">
              <img src="images/hero-img.jpg" alt="" />
            </div>
            <div className="detail_container">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="detail-box">
                      <h1>
                        Rent Car <br />
                        Experts <br />
                        Service
                      </h1>
                      <a href="/">Contact Us</a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="detail-box">
                      <h1>
                        Rent Car <br />
                        Experts <br />
                        Service
                      </h1>
                      <a href="/">Contact Us</a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="detail-box">
                      <h1>
                        Rent Car <br />
                        Experts <br />
                        Service
                      </h1>
                      <a href="/">Contact Us</a>
                    </div>
                  </div>
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default HeroSection;
