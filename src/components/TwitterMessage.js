import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  textCounter = () => {
    return this.props.maxChars - this.state.message.length
  }
  
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e => this.handleChange(e)} type="text" name="message" id="message" value={this.state.message} />
        <p>{this.textCounter()} characters remaining</p>
      </div>
    );
  }
}

export default TwitterMessage;
