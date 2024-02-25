import { useState, useEffect } from 'react'
import React from 'react'
import axios from "axios"
import WorkoutList from '../components/WorkoutList'
import Home from '../components/Home'
import Dashboard from '../components/Dashboard'
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"


function App() {

  const [workoutsList, setWorkoutsList] = useState([])


  //Get all
  function getWorkoutList(){
    axios.get("/api/list") //moved get request into is own function to make it more re-usable
    .then(res => setWorkoutsList(res.data))
    .catch(err => console.log(err.response.data.errMsg))// errMsg set up in server
  }
 
  useEffect(() => {
    getWorkoutList() //call function within useEffect
  }, []) // this will only fire once since the dependency is an empty array


  return (
    <div>

      <Router>

        <nav style={{margin: 10}}>
          <Link to="/" style={{padding: 5}} > Home </Link>
          <Link to="/list" style={{padding: 5}} > Workout List </Link>
          <Link to="/dashboard" style={{padding: 5}} > Dashboard </Link>


        </nav>


        <Routes>
          <Route path="/" element={<Home/>}  />

          <Route path="/list" element= {workoutsList.map(workout => 
            <WorkoutList 
            {...workout}
            key={workout.title}/>)} 
          />

          <Route path="/dashboard" element={<Dashboard/>}/>


        </Routes>

      </Router>
     
      
     
      
     
    </div>
  )
    
  
}

export default App
