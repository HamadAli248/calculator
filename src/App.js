   
import React, { Component } from "react"
import "./App.css"

function App() {
  return (
    <div className="wrapper">
      <Keypad />
    </div>
  )
}

class Keypad extends Component {
  state = {
    count: [],
    keys: [
      { num: "clear", type: "clearButton" },
      { num: "/", type: "operatorButton" },
      { num: "7", type: "numberButton" },
      { num: "8", type: "numberButton" },
      { num: "9", type: "numberButton" },
      { num: "*", type: "operatorButton" },
      { num: "4", type: "numberButton" },
      { num: "5", type: "numberButton" },
      { num: "6", type: "numberButton" },
      { num: "-", type: "operatorButton" },
      { num: "1", type: "numberButton" },
      { num: "2", type: "numberButton" },
      { num: "3", type: "numberButton" },
      { num: "+", type: "operatorButton" },
      { num: "0", type: "numberButton zero" },
      { num: "=", type: "operatorButton" }
    ]
  }

  number = name => {
    if (name === "clear") {
      this.setState({ count: [] })
    } else if (name === "=") {
      this.setState(prevState => ({
        count: [eval(prevState.count.join(""))]
      }))
    } else {
      this.setState(prevState => ({
        count: [...prevState.count, name]
      }))
    }
  }

  render() {
    return (
      <div className="calc">
        <div className="row">
          <p>{this.state.count}</p>
        </div>
        <div className="buttonsWrapper">
          <div className="buttons">
            {this.state.keys.map(key => {
              return (
                <button
                  className={key.type + " button"}
                  onClick={() => this.number(key.num)}
                >
                  {key.num}
                </button>
              )
            })}
          </div>
        </div>

      </div>
    )
  }
}

export default App
