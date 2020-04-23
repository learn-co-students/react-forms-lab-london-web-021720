import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUser = (event) => {
    this.setState({
      username: event.target.value
    })
  }

  handlePass = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  handleNull = (event) => {
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={((this.state.username.length > 0) && (this.state.password.length > 0)) ? this.props.handleLogin : this.handleNull}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUser}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePass}/>
          </label>
        </div>
        <div>
          <button type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
