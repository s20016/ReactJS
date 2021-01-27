import React from "react"
import "./css/RealTimeInput.css"

export default class RealTimeInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Real Time Input',
      userInput: null,  
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
      <div className='P3'>
        <h1>{this.state.title}</h1>
        <div className='inputBox'>
          <input type='text' placeholder='Enter something...' className='P3-Input' value={this.state.userInput} onChange={this.handleInput} />
          <button type='button' onClick={this.handleSave} >Save</button>
        </div>
        <h3>{this.state.userInput}</h3><br></br>
        {this.state.inputData.map((i, index) => <p key={index}>{i}</p> )}
      </div>
    )
  }
}