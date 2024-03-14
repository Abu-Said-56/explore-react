import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './Team'
import Users from './Users'
function App() {
  function buttonClick(){
    alert('Button Clicked')
  }

  return (
    <>     
      <h1>React Core Concept</h1>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={buttonClick}>Click Here</button>
    </>
  )
}

export default App
