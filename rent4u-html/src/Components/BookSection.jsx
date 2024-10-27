import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class BookSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pickUpLocation: "",
      dropLocation: "",
      pickUpDate: "",
      returnDate: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form data:", this.state);
  };

  render() {
    return (
      <section className="book_section">
        <div className="form_container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="col-lg-8">
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="pickUpLocation">Pick Up Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pickUpLocation"
                      placeholder="abc"
                      value={this.state.pickUpLocation}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="dropLocation">Drop Location</label>
                    <input
                      type="text"
                      className="form-control"
                      name="dropLocation"
                      placeholder="abc"
                      value={this.state.dropLocation}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-md-6">
                    <label htmlFor="pickUpDate">Pick Up Date</label>
                    <input
                      type="text"
                      className="form-control"
                      name="pickUpDate"
                      placeholder="07/09/2020"
                      value={this.state.pickUpDate}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="returnDate">Return Date</label>
                    <input
                      type="text"
                      className="form-control"
                      name="returnDate"
                      placeholder="07/09/2020"
                      value={this.state.returnDate}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn-container">
                  <button type="submit" className="btn btn-primary">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="img-box">
          <img src="images/book-car.png" alt="Book a car" />
        </div>
      </section>
    );
  };
};

export default BookSection;
