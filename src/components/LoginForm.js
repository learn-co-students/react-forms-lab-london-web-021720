import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:"",
      password: ""
    };
  }

  handleInputChange =(event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit =(event) => {
    event.preventDefault()
    const valueName = this.state.username.trim()
    const valuePass = this.state.password.trim()

    if (valueName && valuePass ) {
      this.props.handleLogin(this.state)
    }
    else {
      console.log("fail")
      this.setState({
        username: ""
      })
    }
  }

  render() {
    return (
      <form onSubmit = {event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username"  type="text"  onChange ={event => this.handleInputChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password"  onChange ={event => this.handleInputChange(event)} />
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
