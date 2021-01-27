import React from 'react'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'BMI',
      userWeight: '',
      userHeight: '',
      userBMI: '0'
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleHeight = (event) => {
    const value = event.target.value
    this.setState({
      userHeight: value
    })
  }

  handleWeight = (event) => {
    const value = event.target.value
    this.setState({
      userWeight: value
    })
  }

  handleSubmit = (event) => {
    // BMI = kg/m2
    this.setState({
      userBMI: this.state.userWeight / ((this.state.userHeight / 100) ^ 2),
    })
    console.log(this.state.userBMI)
  }

  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <p>Height (cm):</p>
          <input type='number' value={this.state.userHeight} onChange={this.handleHeight}/><br></br>
          <p>Weight (kg):</p>
          <input type='number' value={this.state.userWeight} onChange={this.handleWeight}/><br></br>
          <button type='button' onClick={this.handleSubmit}>Calculate BMI</button>
        </form>
        <p>BMI: {this.state.userBMI}</p>
      </>
    )
  }


}