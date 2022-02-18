import React from 'react'
import './App.css'
import {Main} from './components/Main/main'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App