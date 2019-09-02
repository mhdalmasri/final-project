import React, { Component } from 'react'

export default class Register extends Component {
  render() {
    return (

<div className="card">
  <div className="card-body px-lg-5 pt-0">

    <form className="text-center" style={{color: "#757575;"}} action="#!">

      <div className="md-form">
        <input type="email" id="materialLoginFormEmail" className="form-control"/>
       
      <div>
         <form
              method="post"
              action="http://localhost:5000/api/users/register"
            >
              <div className="form-group">
                <label htmlFor="name">
                  <b>Name:</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter name"
                  name="name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  <b>Email:</b>
                </label>
                <input
            
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
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
                  required
                />
              </div>
              <input className="btn btn-primary" type="submit" value="Register" />
            </form>

      </div>

      <div className="md-form">
        <input type="password" id="materialLoginFormPassword" className="form-control"/>
        
      </div>
      <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>

      

      <p>or sign in with:</p>
      <a type="button" className="btn-floating btn-fb btn-sm">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a type="button" className="btn-floating btn-tw btn-sm">
        <i className="fab fa-twitter"></i>
      </a>
      <a type="button" className="btn-floating btn-li btn-sm">
        <i className="fab fa-linkedin-in"></i>
      </a>
      <a type="button" className="btn-floating btn-git btn-sm">
        <i className="fab fa-github"></i>
      </a>

    </form>

  </div>

</div>

      // <div>
      //    <form
      //         method="post"
      //         action="http://localhost:5000/api/users/register"
      //       >
      //         <div className="form-group">
      //           <input
      //             type="text"
      //             className="form-control"
      //             placeholder="username :"
      //             name="name"
      //             required
      //           />
      //         </div>
      //         <div className="form-group">
      //           <input
      //             type="email"
      //             className="form-control"
      //             placeholder="email :"
      //             name="email"
      //             required
      //           />
      //         </div>
      //         <div className="form-group">
      //           <input
      //             type="password"
      //             className="form-control"
      //             placeholder="password :"
      //             name="password"
      //             required
      //           />
      //         </div>
      //         <input type="submit" value="register" />
      //       </form>
      // </div>
    )
  }
}
