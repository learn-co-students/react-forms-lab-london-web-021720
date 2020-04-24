import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      tweet: ""
    };
  }

  updateTweet = (event) => {
    this.setState({
      tweet: event.target.value
    })
  }

  render() {
    const maxChars = this.props.maxChars
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.updateTweet} type="text" name="message" id="message" value={this.state.tweet} />
        <br />
        {maxChars - this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
