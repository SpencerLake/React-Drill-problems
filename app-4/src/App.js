import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: "",
      password: ""
    }
  }

  setUsername(input) {
    this.setState({username: input})
  }

  setPassword(input) {
    this.setState({password: input})
  }

  loginSubmission() {
    let username = this.state.username
    let password = this.state.password

    alert(`Username: ${username} Password: ${password}`)
  }

  render(){

    return(
      <div>
        <form className="form">
          <input onChange={(e) => this.setUsername(e.target.value)} type="text" />
          <input onChange={(e) => this.setPassword(e.target.value)} type="text" />
          <button onClick={() => this.loginSubmission()} type="submit">Login</button>
        </form>
      </div>
    )
  }

}

export default App;
