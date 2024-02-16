import { useState, useEffect } from 'react'
import axios from "axios"
import Bounty from "./Bounty.jsx"
import './App.css'
import BountyForm from './BountyForm.jsx'
// import { use } from '../../routes/bountyRouter'

function App() {
  // Read (GET) existing bounties and show them to the user of your site, 
  const [bounties, setBounties] = useState([])

function getBounties(){
  axios.get("/api/bounty") //moved get request into is own function to make it more re-usable
  .then(res => setBounties(res.data))
  .catch(err => console.log(err.response.data.errMsg))// errMsg set up in server
}

function postBounty(newBounty){
  axios.post("/api/bounty", newBounty)
  .then(res => {
    setBounties(prevBounties => [...prevBounties, res.data]) //update state to set it to a new array that has all prev data , but new bounty at the end the response.data, this will re render the page so that it remaps bounties below on wep page
  
  })
  .catch(err => console.log(err))
}

// Destroy (DELETE) bounties from the list of all bounties.

function deleteBounty(bountyID){
  axios.delete(`/api/bounty/${bountyID}`)
  .then(res => {
    setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyID)) //using filter , we are filtering out the bounties that dont have the id that was deleted
  })
  .catch(err => console.log(err))

}
// Update (PUT) existing bounties (e.g. if you wanted to up the price for a bounty),
function updateBounty(updates, bountyID){
  axios.put(`/api/bounty/${bountyID}`, updates)
  .then(res => {
    setBounties(prev => prev.map(bounty => bounty._id !== bountyID ? bounty : res.data))}) // checking if id is not equal to id passed in then keep it if it evaluates to true meaning no updates return bounty as is if not true then it return res.data returns the updated bounty
  .catch(err => console.log(err)) 
}

  useEffect(() => {
    getBounties() //call function within useEffect
  }, []) // this will only fire once since the dependency is an empty array

  

  return (
    <div>
      <div className="bounties-container">

        <BountyForm 
        submit={postBounty}
        buttonText= "Add Bounty"
        /> 
        {/* pass the postBounty function as a prop */}
        {bounties.map(bounty => 
        <Bounty 
        {...bounty} 
        key={bounty.firstName}
        deleteBounty={deleteBounty} //pass deletebounty function
        updateBounty={updateBounty}
        />)}

      </div>
    </div>
  )
}

export default App
