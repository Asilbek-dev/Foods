import React, { Component } from "react";

export default class Login extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.account);
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ account: { ...this.state.account, [name]: value } });
  };

  render() {
    return (
      <main className="container">
        <div className="row">
          <div className="col-md-4 offset-4">
            <h2 ref={this.title}>Login</h2>

            <form>
              <div className="form-group">
                <label htmlFor="username">Email address</label>
                <input
                  value={this.state.account.username}
                  autoFocus
                  ref={this.usernameRef}
                  id="username"
                  name="username"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  value={this.state.account.password}
                  id="password"
                  name="password"
                  type="password"
                  className="form-control"
                  onChange={this.handleChange}
                />
              </div>
              <button
                onClick={this.handleSubmit}
                className="btn-sm btn-success float-right"
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }
}
