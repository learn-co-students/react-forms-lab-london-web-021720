import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) => {
    event.preventDefault()
    this.state.username.length > 0 && this.state.password.length > 0 ? this.props.handleLogin(this.state) : null
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input onChange={this.onInputChange} id="username" name="username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={this.onInputChange} id="password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button  type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
