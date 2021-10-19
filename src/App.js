import React from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
const App = () => {
  return (
    <div className="app">
      <Header/>
     
     <div className="body">
       <Sidebar/>
     </div>
    </div>
  )
}

export default App
