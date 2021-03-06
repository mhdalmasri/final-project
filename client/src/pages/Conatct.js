import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-xl-8 offset-xl-2 py-5">
              <h1 className="my-5">GET IN TOUCH</h1>
              <form
                action="https://formspree.io/m.almasri@outlook.de"
                method="POST"
              >
                <div className="messages"></div>

                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_name">First Name *</label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Please enter your first name"
                          required="required"
                          data-error="First name is required."
                          autoFocus
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="form_lastname">Last Name *</label>
                        <input
                          id="form_lastname"
                          type="text"
                          name="surname"
                          className="form-control"
                          placeholder="Please enter your last name"
                          required="required"
                          data-error="Last name is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <div className="form-group">
                        <label htmlFor="form_email">Email *</label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Please enter your email"
                          required="required"
                          data-error="Valid email is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="form_message">Message *</label>
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Your Message"
                          rows="4"
                          required="required"
                          data-error="Please, leave us a message."
                        ></textarea>
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md flex-row justify-content-around">
                      <input
                        type="submit"
                        className="btn btn-outline-success btn-send mx-auto"
                        value="Send message"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
          <ul className="socialIcons">
            <li className="facebook">
              <a href="#">
                <i className="fa fa-fw fa-facebook"></i>Facebook
              </a>
            </li>
            <li className="twitter">
              <a href="#">
                <i className="fa fa-fw fa-twitter"></i>Twitter
              </a>
            </li>
            <li className="instagram">
              <a href="#">
                <i className="fa fa-fw fa-instagram"></i>Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
