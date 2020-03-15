import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super();

    this.state = {
      message: "",
      remainingCharacters: props.maxChars
    };
  }

  handleInput = (event) => {
    console.log(event.target.value)
    console.log(event.target.value.length)
    this.setState({
      message: event.target.value,
      remainingCharacters: this.props.maxChars - event.target.value.length
    })
  }

  showChars = () => {
    if (this.state.remainingCharacters >= 0) {
       return <p>{this.state.remainingCharacters} {this.state.remainingCharacters === 1 ? "character remaining" : "characters remaining"}</p>
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleInput(event)} type="text" name="message" id="message" value={this.state.message}/>
        {this.showChars()}
      </div>
    );
  }
}

export default TwitterMessage;


// This component takes one prop: maxChars which is a number — the maximum amount of characters a message can have. This prop is being passed in from the App component with the value 280.
//
// You'll find an <input type="text"> in this component. Make this a controlled component by adding the attributes to the <input> element. Its value should be saved in the component's state and should update on every change to the input.
//
// Show the remaining characters in the component. It doesn't matter how you render it, as long as the number is correct. No need to guard against input that is too long — you can let the counter reach negative values.
//
