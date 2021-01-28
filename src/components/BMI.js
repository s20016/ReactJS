import React from 'react'
import './css/BMI.css'

export default class BMI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'BMI Calculator',
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
      <div className='P2'>
        <h1>{this.state.title}</h1>
        <form className='inputBox' onSubmit={this.handleSubmit}>
          <div className='Set'>
            <p className='P2-P'>Height (cm):</p>
            <input className='P2-Input' type='number' value={this.state.userHeight} onChange={this.handleHeight}/><br></br>
          </div>
          <div className='Set'>
            <p className='P2-P'>Weight (kg):</p>
            <input className='P2-Input' type='number' value={this.state.userWeight} onChange={this.handleWeight}/><br></br>
          </div>
          <button type='button' onClick={this.handleSubmit}>Calculate</button>
        </form>
        <p className='BMIResult'>BMI: {this.state.userBMI}</p>
      </div>
    )
  }
}