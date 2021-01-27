import React from "react"
import "./App.css"

// Import Projects
import Heading from "./components/Heading"
import RealTimeInput from "./components/RealTimeInput"
import CurrencyConverter from "./components/CurrencyConverter"
import BMI from "./components/BMI"
import Footer from "./components/Footer"

// Main
export default function App() {
  return (
    <>
      <Heading />
      <ul className='container'>
        <RealTimeInput />
        <CurrencyConverter />
        <BMI />
      </ul>
      <Footer />
    </>
  );
}