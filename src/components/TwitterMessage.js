import React, {Component} from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    // let thing = this.props.maxChars

    this.state = {
      currentLength: 0,
      remainingCharacters: props.maxChars,
      message: ""
    };
  }

  handleTyping = (event) => {
    this.setState({
      currentLength: event.target.value.length,
      remainingCharacters: this.state.remainingCharacters - event.target.value.length,
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={event => this.handleTyping(event)} value={this.state.message}/>
        <p>
          {this.state.remainingCharacters}
        </p>
      </div>
    );
  }
}

export default TwitterMessage;
