import React, { Component } from "react";

export default class Conatct extends Component {
  render() {
    return (
      <div>
        <div class="container">
          <div class="row">
            <div class="col-xl-8 offset-xl-2 py-5">
              <h1>Contact Us:</h1>

              <p class="lead">
                This is a demo for our tutorial dedicated to crafting working
                Bootstrap contact form with PHP and AJAX background.
              </p>
              <form>
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
                    <div className="col-md-12">
                      <input
                        type="submit"
                        className="btn btn-success btn-send"
                        value="Send message"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
