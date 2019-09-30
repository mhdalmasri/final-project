import React, { Component } from "react"
import { Link, Redirect } from "react-router-dom"
import Cookies from "universal-cookie"
import axios from "axios"
import { UserConsumer } from '../ContextApi/UserContext'
import { NotificationsConsumer } from "../ContextApi/NotificationsContext";
const cookies = new Cookies
const userId = cookies.get("myId")
export default class Navbar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  async submitHandler(e, onLogout) {
    e.preventDefault()
    await axios.post("http://localhost:5000/api/users/logout")
      .then(() => {
        this.setState({
          redirect: true
        })
        const cookies = new Cookies()
        cookies.remove("myToken", { path: "*" })
        cookies.remove("myId", { path: "*" })
        onLogout()
      })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to="/" />
    }
  }

  render() {

    return (
      <UserConsumer>
        {({ onLogout, users }) =>
          <NotificationsConsumer>
            {({ allNotifications }) => {
              const username = users.map(user => {
                if (user._id === userId) {
                  return user.name
                }
              }).join("")
              let num = 0
              const newNotifications = allNotifications.map(note => {
                if (note.clicked === false && note.messages[note.messages.length - 1].sender !== username) {
                  return num += 1
                } else {
                  return null
                }
              })
              console.log(num)
              return (
                <nav className="navbar  navbar-expand-lg navbar-light border-bottom">

                  {this.renderRedirect()}
                  <Link className="navbar-brand" to="/ToySwap">ToySwap</Link>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>

                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to="/myToys">My Toys</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/notifications">{num === 0 ? "Notifications" : <>
                          Notifications <span className="badge badge-danger">{num}</span>
                        </>}</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                      </li>
                    </ul>
                    <form
                      onSubmit={(e) => this.submitHandler(e, onLogout)}
                      className="form-inline my-2 my-lg-0"
                    >

                      <button
                        className="btn btn-outline-danger m-2 my-sm-0"
                        type="submit"
                      >Logout</button>
                    </form>
                  </div>
                </nav>
              )
            }
            }
          </NotificationsConsumer>

        }
      </UserConsumer>
    )
  }
}

