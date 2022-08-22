import React from 'react';
import Header from './components/header/header';
import Section1 from './components/section1/section1';
import Section2 from './components/section2/section2';
import Section3 from './components/section3/section3';
import Footer from './components/footer/footer';
import './app.css'


function App() {
  
  return (
    <div className='appContainer'>
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  )
}

export default App
