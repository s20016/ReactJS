import React from 'react'
import './App.css'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Enter anything you want!',
      userInput: '',  
      inputData: []
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  handleInput = (event) => {
    const value = event.target.value
    this.setState({
      userInput: value,
    })
  }

  handleSave = (event) => {
    const value = event.target.value
    this.state.inputData.push(this.state.userInput)
    this.setState({
      inputData: this.state.inputData.concat(value)
    })
  }

  render() {
    return (
      <>
        <input value={this.state.userInput} onChange={this.handleInput} />
        <button type='button' onClick={this.handleSave} >Save</button>
        <h3>{this.state.userInput}</h3><br></br>
        {this.state.inputData.map((i, index) => <p key={index}>{i}</p> )}
      </>
    )
  }
}