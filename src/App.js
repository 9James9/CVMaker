import React from 'react'
import './App.css'
import {Main} from './components/Main/main'
import Header from './components/Header/header'
function App() {
  return (
    <div className='app-container'>
      <Header/>
      <Main/>
    </div>
  )
}

export default App