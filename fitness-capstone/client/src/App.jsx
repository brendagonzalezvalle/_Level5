import { useState } from 'react'
import React from 'react'
import axios from "axios"
import WorkoutList from '../components/WorkoutList'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'


function App() {
 

  return (
    <div>
      <h1>Hello World!</h1>
      <Home />
      <WorkoutList />
      <Dashboard />
    </div>
  )
    
  
}

export default App
