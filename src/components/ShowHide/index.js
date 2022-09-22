import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstName: false, isLastName: false}

  onClickFirstName = () => {
    this.setState(prevState => ({isFirstName: !prevState.isFirstName}))
  }

  onClickLastName = () => {
    this.setState(prevState => ({isLastName: !prevState.isLastName}))
  }

  firstNameBox = () => {
    const {isFirstName} = this.state
    if (isFirstName === true) {
      return <p className="card-container">Joe</p>
    }
    return null
  }

  lastNameBox = () => {
    const {isLastName} = this.state
    if (isLastName === true) {
      return <p className="card-container">Jonas</p>
    }
    return null
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="box-container">
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickFirstName}
            >
              Show/Hide Firstname
            </button>
            {this.firstNameBox()}
          </div>
          <div className="button-container">
            <button
              type="button"
              className="button"
              onClick={this.onClickLastName}
            >
              Show/Hide Lastname
            </button>
            {this.lastNameBox()}
          </div>
        </div>
      </div>
    )
  }
}
export default ShowHide
