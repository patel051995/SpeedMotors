import {component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onIncrement = () => {
    const {count} = this.state
    if (count < count < 200) {
      this.setState(prevState => ({count: prevState.count + 10}))
    }
  }

  onDecrement = () => {
    const {count} = this.state
    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 10}))
    }
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          className="speedometer-img"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="speed">Speed is {count}mph</h1>
        <p className="description">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button
            type="accbutton"
            className="button"
            onClick={this.onIncrement}
          >
            Accelerate
          </button>
          <button
            className="brakeButton"
            type="button"
            onClick={this.onDecrement}
          >
            Apply Break
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
