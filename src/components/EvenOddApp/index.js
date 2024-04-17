import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {counter: 0}
  onIncrement = () => {
    this.setState(prevState => {
      let number = Math.ceil(Math.random() * 100)
      return {counter: prevState.counter + number}
    })
  }

  render() {
    const {counter} = this.state
    return (
      <div className="bg-container">
        <div className="card-1">
          <h1 className="heading">Count {counter}</h1>
          {counter % 2 === 0 ? (
            <p className="statement">Count is Even</p>
          ) : (
            <p className="statement">Count is Odd</p>
          )}
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="Note">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
