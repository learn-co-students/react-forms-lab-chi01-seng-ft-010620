import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  // updateUser = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }
  //
  // updatePassword = (event) => {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }

  // loggingIn = () => {
  //   return <p>{this.props.handleLogin(this.state)}</p>
  // }

  // submitForm = (event) => {
  //   event.preventDefault()
  //   const username = event.target.username.value
  //   const password = event.target.password.value
  //   const formData = {username, password}
  //   const arr = this.state.loginDetails.concat(formData)
  //   this.setState({
  //     loginDetails: arr
  //   })
  //   // if (event.target.)
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.handleLogin(this.state)
  }

  render() {
    return (
      <form onSubmit={event => this.submitForm(event)}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={event => this.handleChange(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={event => this.handleChange(event)}/>
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

// LoginForm
// Open the components/LoginForm.js file.
//
// This component takes one prop: handleLogin which is a function — this function is called when the form is being submitted. By default, this function currently just includes console.log. That will allow you to see if the form is functioning correctly when working in your browser.
//
// You'll find two inputs in this component: <input type="text"> and <input type="password">. Make this a controlled component by adding the necessary attributes to these inputs. The input values should be saved to the component's state on every change.
//
// An example of an input would look like:
//
//    <input
//      id="username"
//      type="text"
//      name="username"
//      value={this.state.username}
//      onChange={this.handleInputChange}
//    />
// Remember that you can retrieve the input name and value of an event.target from the JS event.
//
// Add the necessary event handler to the <form> element in order to call the onSubmit callback prop.
//
// The onSubmit callback prop should only be called if both fields are filled in (with any value).
//
// Note: In the starter code are id attributes - these are used in the tests, so make sure to leave them as they are.
