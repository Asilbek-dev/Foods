import React, { Component } from "react";

export default class Register extends Component {
  state = {
    register: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.register);
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ register: { ...this.state.register, [name]: value } });
  };

  render() {
    return (
      <main className="container">
        <div className="row">
            <div className="col-md-4 offset-4">
                <h2 ref={this.title}>Ro'yhatdan o'tish</h2>
        
                <form>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input
                      value={this.state.register.username}
                      autoFocus
                      ref={this.usernameRef}
                      id="username"
                      name="username"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input
                      value={this.state.register.email}
                      ref={this.usernameRef}
                      id="email"
                      name="email"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      value={this.state.register.password}
                      id="password"
                      name="password"
                      type="password"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Confirm password</label>
                    <input
                      value={this.state.register.confirmPassword}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="form-control"
                      onChange={this.handleChange}
                    />
                  </div>
                  <button
                    onClick={this.handleSubmit}
                    className="btn-lg btn-success float-right"
                  >
                    Ro'yhatdan o'tish
                  </button>
                </form>
            </div>
        </div>
      </main>
    );
  }
}
