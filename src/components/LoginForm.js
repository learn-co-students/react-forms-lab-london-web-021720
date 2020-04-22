import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (!this.state.username || !this.state.password) 
    return;
    this.props.handleLogin(this.state);
  };

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input
              onChange={(e) => this.handleInputChange(e)}
              id="username"
              name="username"
              type="text"
              value={this.state.username}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              onChange={(e) => this.handleInputChange(e)}
              id="password"
              name="password"
              type="password"
              value={this.state.password}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
