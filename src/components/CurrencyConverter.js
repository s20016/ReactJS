import React from "react"
import "./css/CurrencyConverter.css"

export default class CurrencyConverter extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      jpyVal: '0',
      usdVal: '0',
      phpVal: '0',
      data: []
    }

    // Handlers
    this.handleJPY = this.handleJPY.bind(this)
    this.handleUSD = this.handleUSD.bind(this)
    this.handlePHP = this.handlePHP.bind(this)
  }

  async componentDidMount() {
    const url = 'https://s20016.github.io/ReactJS/data/rates.json'
    // const url = './data/rates.json'
    await window.fetch(url).then(res => res.json()).then(json => this.setState({ data: json}))
    // console.log(this.state.data)
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
      <div className='P1'>
        <h1>{this.state.data.title}</h1>
        <div className='inputBox'>
          <div className='Set'>
            <p className='currency'>JPY</p>
            <input type='text' className='P1-Input' value={this.state.jpyVal} onChange={this.handleJPY}/>
          </div>
          <div className='Set'>
            <p className='currency'>USD</p>
            <input type='text' className='P1-Input' value={this.state.usdVal} onChange={this.handleUSD}/>
          </div>
          <div className='Set'>
            <p className='currency'>PHP</p>
            <input type='text' className='P1-Input' value={this.state.phpVal} onChange={this.handlePHP}/>
          </div> 
        </div>
      </div>
    )
  }
}