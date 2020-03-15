import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username:'',
      password:''
    };
  }

    handlePassword = (event) => {
      this.setState({
        password: event.target.value
      })
    }

    handleUserName = (event) => {
      this.setState({
        username: event.target.value
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      
      if(this.state.username.length > 0 && this.state.password.length > 0){
      return this.props.handleLogin(this.state)}
    }

  render() {
    console.log(this.props.handleLogin)
    return (
      <form onSubmit= {event => this.handleSubmit(event)}>
        <div>
          <label>
            Username
            <input onChange={event => this.handleUserName(event)} id="username" name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input onChange={event => this.handlePassword(event)}id="password" name="password" type="password" value={this.state.password}/>
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
