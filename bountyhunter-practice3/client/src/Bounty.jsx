import React, {useState} from "react";
import BountyForm from "./BountyForm";

export default function Bounty(props){
    console.log(props)
   const {bountyAmount, firstName, lastName, living, type, _id, updateBounty} = props
   const [editToggle, setEditToggle ]= useState(false) //built toggle to have 2 views below, based on the toggle boolean
    return(
        <div className="bounty">
            { !editToggle ?
            <>
                <h1>First Name: {firstName}</h1>
                <h1>Last Name: {lastName}</h1>
                <h2>Bounty Amount: ${bountyAmount}</h2>
                <h2>Living: {living}</h2>
                <h2>Type of Bounty: {type}</h2>
                <button 
                className="bounty-delete-button"
                onClick={() => props.deleteBounty(_id)}>Delete</button> 
                 {/* //pass an anonymous function, pass the id of the bounty that was clicked, this will pass the id up , the id will be received by the delete request in server. */}
                 <button
                    className="bounty-edit-button"
                    onClick={() => setEditToggle(prev => !prev)}
                 >Edit</button>
            </>
         :
            <>
                <BountyForm
                    firstName={firstName}
                    lastName={lastName}
                    _id={_id}
                    buttonText="Submit Edit"
                    submit={updateBounty}
                />

                <button
                    onClick={() => setEditToggle(prev => !prev)}>
                    Close
                </button>
            </>
            }
        </div>
    )
}