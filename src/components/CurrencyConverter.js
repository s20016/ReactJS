import React from "react"
import "../css/main.css"

import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

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
    await window.fetch(url).then(res => res.json()).then(json => this.setState({ data: json}))
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
        <div className="P1-MainTitle">
          <h1 className="P1-Header">converter</h1>
          <MonetizationOnIcon fontSize="large"/>
        </div>
        <div className='P1-InputBox'>
          <Input
            fullWidth
            variant="filled"
            value={this.state.usdVal}
            onChange={this.handleUSD}
            startAdornment={<InputAdornment position="start">&#36;</InputAdornment>}
          />
          <Input
            fullWidth
            variant="filled"
            value={this.state.jpyVal}
            onChange={this.handleJPY}
            startAdornment={<InputAdornment position="start">&#165;</InputAdornment>}
          />
          <Input
            fullWidth
            variant="filled"
            value={this.state.phpVal}
            onChange={this.handlePHP}
            startAdornment={<InputAdornment position="start">&#8369;</InputAdornment>}
          />
        </div>
      </div>
    )
  }
}