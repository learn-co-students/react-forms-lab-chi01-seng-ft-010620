import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: " ",
      password: ""
    };
  }
handleChange=(event)=>{
  //event.persist()
this.setState({
  [event.target.name]: event.target.value
})
 

 
}
  render() {
    console.log("new",this.state)
    return (
      <form onSubmit={(event)=>{event.preventDefault() 
      if(this.state.password && this.state.username){this.props.handleLogin(this.state)}}} >
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleChange} value={this.state.userName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleChange} value={this.state.password}/>
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
