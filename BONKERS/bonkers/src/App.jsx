import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './assets/components/nav'
import Midbon from './assets/components/midbon'
import Footer from './assets/components/footer'
import Login from './assets/components/login'


function App() {
  return (
    <div>
       
      <Nav/>
      <Midbon/>
      <Footer/>
      
    </div>
  )
}

export default App


