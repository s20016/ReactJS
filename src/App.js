import React from "react";
import "./css/main.css";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

// Import Projects
import RealTimeInput from "./components/RealTimeInput"
import CurrencyConverter from "./components/CurrencyConverter"
import BMI from "./components/BMI"
import GitHubIcon from '@material-ui/icons/GitHub';

// Main
export default class App extends React.Component {

  AppHeader = () => {
    return (
      <div className="header">
        <p className='h1'>Projects</p>
        <p className='h2'>ReactJS</p>
      </div>
    )
  }

  AppFooter = () => {
    return (
      <div className="footer">
        <Router>
          <Link 
            to={{ pathname:"https://github.com/s20016/ReactJS" }} 
            target="_blank"><GitHubIcon className="logo"/>
          </Link> 
        </Router>
      </div>
    )
  }

  render() {
    return (
      <>
        <this.AppHeader/>
        <div className="ReactProjects">
          <RealTimeInput/>
          <CurrencyConverter/>
          <BMI/>
        </div>
        <this.AppFooter/>
      </>
    )
  }
}