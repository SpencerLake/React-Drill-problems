import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       data: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
//     }
//   }

//   render() {
//     let foodsToDisplay = this.state.data.map((element, index) => {
//       return <h2 key={index}>{element}</h2>
//     })
//     return(
//       <div className="App">{foodsToDisplay}</div>
//     )
//   }
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }

  render() {
    let displayFoods = this.state.foods.map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return(
      <div className="App">{displayFoods}</div>
    )
  }

}

export default App;
