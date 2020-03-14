import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: 280,
      messageInput: ""
    };
  }
handleChange=(event)=>{
  //event.persist()
  this.setState((previousState)=>({
    value: previousState.value -= 1,
    messageInput: event.target.value

  }))
}
  render() {
    console.log(this.state.messageInput)
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={(event)=>{this.handleChange(event)}} type="text" name="message" id="message" value={this.state.messageInput} />
        <p>Number of remaining characters you can use: {this.state.value}</p>
      </div>
    );
  }
}

export default TwitterMessage;
