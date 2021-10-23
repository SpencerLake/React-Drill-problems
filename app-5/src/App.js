import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from "./image";

class App extends Component {
  render() {
    return(
      <div className="App">
        <Image url={"https://media.istockphoto.com/photos/using-a-desktop-computer-with-a-cat-picture-id1287254643?b=1&k=20&m=1287254643&s=170667a&w=0&h=98Tak8PKs2WJfxqcVvPt8Y19xVGtELDISk6yjcZ3DM8="} alt="Cute Cat" />
      </div>
    )
  }

}

export default App;
