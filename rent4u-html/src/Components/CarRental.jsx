import React, { Component } from 'react';

class CarRental extends Component {
  render() {
    return (
      <div>
        {/* About Section */}
        <section className="about_section layout_padding-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 px-0">
                <div className="img-box">
                  <img src="images/about-img.png" alt="" />
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="detail-box">
                  <h2>About Our Cars</h2>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Best Cars Section */}
        <section className="best_section">
          <div className="container">
            <div className="book_now">
              <div className="detail-box">
                <h2>Our Best Cars</h2>
                <p>It is a long established fact that a reader will be distracted by the</p>
              </div>
              <div className="btn-box">
                <a href="/">Book Now</a>
              </div>
            </div>
          </div>
        </section>

        {/* Rent Section */}
        <section className="rent_section layout_padding">
          <div className="container">
            <div className="rent_container">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div className="box" key={item}>
                  <div className="img-box">
                    <img src={`images/r-${item}.png`} alt="" />
                  </div>
                  <div className="price">
                    <a href="/">Rent $200</a>
                  </div>
                </div>
              ))}
            </div>
            <div className="btn-box">
              <a href="/">See More</a>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="blog_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>Our Latest Blog</h2>
              <p>It is a long established fact that a reader will be distracted by the</p>
            </div>
            <div className="blog_container layout_padding2-top">
              <div className="carousel-wrap">
                <div className="owl-carousel">
                  {[{ title: 'Vintage', src: 'b-1.jpg' }, { title: 'Steering wheels', src: 'b-2.jpg' }, { title: 'Buick Car', src: 'b-3.jpg' }].map((blog, index) => (
                    <div className="item" key={index}>
                      <div className="box">
                        <div className="date-box">
                          <h6>04 Nov 2019</h6>
                        </div>
                        <div className="img-box">
                          <img src={`images/${blog.src}`} alt={blog.title} />
                        </div>
                        <div className="detail-box">
                          <h5>{blog.title}</h5>
                          <p>
                            It is a long established fact that a reader will be distracted by the readable The point of using Lorem
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="us_section">
          <div className="container">
            <div className="heading_container">
              <h2>Why choose Us</h2>
              <p>It is a long established fact that a reader will be distracted by the</p>
            </div>
            <div className="us_container layout_padding2">
              {['Low Rent', 'Fast Car', 'Safe Car', 'Quick Support'].map((item, index) => (
                <div className="box" key={index}>
                  <div className="img-box">
                    <img src={`images/u-${index + 1}.png`} alt={item} />
                  </div>
                  <div className="detail-box">
                    <h5>{item}</h5>
                  </div>
                </div>
              ))}
              <div className="btn-box">
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </section>

        {/* Client Testimonials Section */}
        <section className="client_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>What Our Customers Say</h2>
              <p>It is a long established fact that a reader will be distracted by the</p>
            </div>
            <div className="carousel-wrap">
              <div className="owl-carousel">
                {[...Array(4)].map((_, index) => (
                  <div className="item" key={index}>
                    <div className="box">
                      <div className="detail-box">
                        <p>
                          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                      </div>
                      <div className="client_id">
                        <div className="img-box">
                          <img src={`images/client-${index + 1}.png`} alt="Client" className="img-1" />
                          <img src={`images/client-${index + 1}-white.png`} alt="Client White" className="img-2" />
                        </div>
                        <div className="name">
                          <h6>Client {index + 1}</h6>
                          <p>Customer feedback</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact_section layout_padding">
          <div className="container">
            <div className="heading_container">
              <h2>Request A Callback</h2>
            </div>
            <div className="row">
              <div className="col-md-8 mx-auto">
                <div className="form_container">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Name" />
                      </div>
                      <div className="form-group col-md-6">
                        <input type="text" className="form-control" placeholder="Phone" />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col">
                        <input type="email" className="form-control" placeholder="Email" />
                      </div>
                    </div>
                    <div className="form-group">
                      <input type="text" className="form-control" placeholder="Message" />
                    </div>
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn">Send</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="contact_items">
              <a href="/">
                <div className="img-box">
                  <img src="images/location.png" alt="Location" />
                </div>
                <h6>123 Street, City, Country</h6>
              </a>
              <a href="/">
                <div className="img-box">
                  <img src="images/call.png" alt="Phone" />
                </div>
                <h6>(+12 1234456789)</h6>
              </a>
              <a href="/">
                <div className="img-box">
                  <img src="images/mail.png" alt="Email" />
                </div>
                <h6>demo@gmail.com</h6>
              </a>
            </div>
          </div>
        </section>

        {/* Google Map Section */}
        <section className="map_section">
          <div className="map_container">
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Eiffel+Tower+Paris+France"
                width="600"
                height="300"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '100%' }}
                allowFullScreen
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default CarRental;
