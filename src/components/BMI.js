import React from 'react'
import '../css/main.css'

import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import Button from '@material-ui/core/Button';

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
    const w = this.state.userWeight
    const h = this.state.userHeight
    const BMICal =  w / (( h/ 100) ^ 2)
    const usrBMI = 
      (BMICal <= 18.5) ? "Underweight"
      : (18.5 < BMICal && BMICal <= 24.9) ? "Normal"
      : (24.9 < BMICal && BMICal <= 29.9) ? "Overweight"
      : "Obesity"
    this.setState({
      userBMI: usrBMI
    })
  }

  render() {
    return (
      <div className='P2'>
        <div className="P2-MainTitle">
        <h1 className="P2-Header">BMI calculator</h1>
          <AccessibilityNewIcon fontSize="large"/>
        </div>
        <FormControl
          fullWidth
          className="P2-InputBox"
          onSubmit={this.handleSubmit}>
          <TextField
            label="Enter your height: cm"
            className="Set"
            value={this.state.userHeight}
            onChange={this.handleHeight}
            />
          <TextField
            label="Enter your weight: kg"
            className="Set"
            value={this.state.userWeight}
            onChange={this.handleWeight}
          />
        </FormControl>
        <Button
          className="P2-Button"
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}>
          Calculate
        </Button>
        <h3 className='BMIResult'>BMI: {this.state.userBMI}</h3>
      </div>
    )
  }
}