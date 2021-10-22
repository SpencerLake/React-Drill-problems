import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       filterString: "",
//       foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
//     }
//   }

//   handleChange(filter) {
//     this.setState({ filterString: filter })
//   }

//   render(){
//     let displayFoods = this.state.foods
//       .filter((element, index) => {
//         return element.includes(this.state.filterString)
//       })
//       .map((element, index) => {
//         return <h2 key={index}>{element}</h2>
//       })
//     return(
//       <div className="App">
//         <input onChange={(e) => this.handleChange(e.target.value)} type="text" />
//         {displayFoods}
//       </div>
//     )
//   }
// }

class App extends Component {
  constructor() {
    super()
    this.state = {
      filterText: "",
      foods: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    }
  }

  handleChange(filter) {
    return this.setState({ filterText: filter })
  }

  render() {
    let displayFoods = this.state.foods
    .filter((element, index) => {
      return element.includes(this.state.filterText)
    })
    .map((element, index) => {
      return <h2 key={index}>{element}</h2>
    })
    return(
      <div className="App">
        <input onChange={(e) => this.handleChange(e.target.value)} type="text" />
        {displayFoods}
      </div>
    )
  }
}


export default App;
