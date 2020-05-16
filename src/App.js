import React from 'react';
import NavBar from './components/navbar/navbar'
import Top from './components/home/toplevel'
import About from './components/home/about'
import AboutUs from './components/home/aboutus'
import Contact from './components/home/contact'
import Footer from './components/home/footer'

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="container" style={{alignItems:'center'}}>
        <Top/>
        <About/>
        <AboutUs/>
        <Contact/>
        
      </div>
      <Footer/>
    </div>
  );
}

export default App;
