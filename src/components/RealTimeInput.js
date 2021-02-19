import React from "react"
import "../css/main.css"

import TextField from '@material-ui/core/TextField';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

export default class RealTimeInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: "",
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
        <div className="P3-MainTitle">
          <h1 className="P3-Header">Real time input</h1>
          <AccessTimeIcon fontSize="large"/>
        </div>
        <div className='P3-InputBox'>
          <TextField
            variant="filled"
            className="P3-Input"
            placeholder="Enter Something..."
            value={this.state.userInput}
            onChange={this.handleInput}/>
          {/* <Button 
            variant="contained"
            className="P3-Button"
            onClick={this.handleSave}>
            Save
          </Button> */}
        </div>
        <h3 className='P3-Output'>
          {this.state.userInput}
        </h3>
        { this.state.inputData.map((i, index) => 
          <p className="P3-History" key={index}>{i}</p> 
        )}
      </div>
    )
  }
}