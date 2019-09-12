import React, { Component } from "react";

export default class Conatct extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-xl-8 offset-xl-2 py-5">
              <h1>GET IN TOUCH</h1>
              <form
                action="https://formspree.io/m.almasri@outlook.de"
                method="POST"
              >
                <div className="messages"></div>

                <div className="controls">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="form_name">Firstname *</label>
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          className="form-control"
                          placeholder="Please enter your firstname *"
                          required="required"
                          data-error="Firstname is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="form_lastname">Lastname *</label>
                        <input
                          id="form_lastname"
                          type="text"
                          name="surname"
                          className="form-control"
                          placeholder="Please enter your lastname *"
                          required="required"
                          data-error="Lastname is required."
                        />
                        <div className="help-block with-errors"></div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md">
                      <div className="form-group">
                        <label for="form_email">Email *</label>
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Please enter your email *"
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
                        <label for="form_message">Message *</label>
                        <textarea
                          id="form_message"
                          name="message"
                          className="form-control"
                          placeholder="Your Message *"
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
        <div class="container">
          <ul class="socialIcons">
            <li class="facebook">
              <a href="#">
                <i class="fa fa-fw fa-facebook"></i>Facebook
              </a>
            </li>
            <li class="twitter">
              <a href="#">
                <i class="fa fa-fw fa-twitter"></i>Twitter
              </a>
            </li>
            <li class="instagram">
              <a href="#">
                <i class="fa fa-fw fa-instagram"></i>Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
