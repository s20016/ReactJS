import React from 'react'
import './App.css'

export default class App2 extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      jpyVal: '',
      usdVal: '',
      phpVal: '',
      data: []
    }

    // Handlers
    this.handleJPY = this.handleJPY.bind(this)
    this.handleUSD = this.handleUSD.bind(this)
    this.handlePHP = this.handlePHP.bind(this)
  }

  async componentDidMount() {
    const url = 'http://localhost:3000/ReactJS/rates.json'
    window.fetch(url).then(res => res.json()).then(json => this.setState({ data: json}))
  }

  // JPY
  handleJPY = (event) => {
    const value = event.target.value
    const data = this.state.data.JPY
    this.setState({
      jpyVal: value,
      usdVal: value * data.USD,
      phpVal: value * data.PHP
    })
  }

  // USD
  handleUSD = (event) => {
    const value = event.target.value
    const data = this.state.data.USD
    this.setState({
      usdVal: value,
      jpyVal: value * data.JPY,
      phpVal: value * data.PHP
    })
  }

  // PHP
  handlePHP = (event) => {
    const value = event.target.value
    const data = this.state.data.PHP
    this.setState({
      phpVal: value,
      jpyVal: value * data.JPY,
      usdVal: value * data.USD
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.data.title}</h1>
        <div>
          <input type='text' value={this.state.jpyVal} onChange={this.handleJPY}/> ¥<br></br>
          <input type='text' value={this.state.usdVal} onChange={this.handleUSD}/> $<br></br>
          <input type='text' value={this.state.phpVal} onChange={this.handlePHP}/> ₱<br></br>
        </div>
      </>
    )
  }
}