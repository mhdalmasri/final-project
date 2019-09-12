import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import { login } from '../ContextApi/api'
import { UserConsumer } from '../ContextApi/UserContext'
export default class Login extends Component {

  state = {
    error: null,
    loading: false,
    email: "",
    password: "",
    redirect:false
  }

  async submitHandler(e, onLogin) {
    e.preventDefault()
    this.setState({
      loading: true,
      error: null
    })
    await login(this.state.email, this.state.password)
      .then(() => {
        this.setState({ loading: false, redirect: true })
        onLogin()
      })
      .catch(error => this.setState({ error, loading: false }))
  }
  changHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/ToySwap" />
    }
  }
  render() {
    const { email, password, error, loading } = this.state
    return (
      <UserConsumer>
        {({ onLogin }) =>
          <div className="card">
            {this.renderRedirect()}
            <div className="card-body px-lg-5 pt-0">
              <form onSubmit={(e) => this.submitHandler(e, onLogin)}>
                <div className="form-group">
                  <label htmlFor="email">
                    <b>Email:</b>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    name="email"
                    id="email"
                    onChange={this.changHandler}
                    value={email}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">
                    <b>Password:</b>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                    name="password"
                    id="password"
                    onChange={this.changHandler}
                    value={password}
                    required
                  />
                </div>
                {error && <div> {error.message} </div>}
                <button className="btn btn-outline-primary" type="submit" disabled={loading} >
                  Login
            </button>
              </form>
            </div>
          </div>
        }
      </UserConsumer>
    )
  }
}
