import React, {useState} from "react";

export default function BountyForm(props){

    const intitData = { 
        firstName: props.firstName || "",
        lastName: props.lastName || "",
        bountyAmount: props.bountyAmount || 0 ,
        living: "",
        type: ""


    }
    console.log(props)
    const [formData, setFormData] = useState(intitData)

    function handleChange(e){
       const {name , value} = e.target //grab events from event target
       setFormData(prevData => ({...prevData, [name]: value})) // to ensure previous data is not erased, use spread operater to get prev data, but then we are updating the name on input below to the value user is typing
    }

    function handleSubmit(e){ //after submit is clicked handle change makes sure everything is fully up to date with what user was typing
        e.preventDefault()
        props.submit(formData, props._id) //pass in formData (new bounty object) to addBounty function

        //Post request

        setFormData(intitData) //reset the initial data inputs
    }
    return(
        <form onSubmit={handleSubmit}> 
            <input 
            type="text" 
            name="firstName" 
            value={formData.firstName} 
            onChange={handleChange} 
            placeholder="First Name" />

            <input 
            type="text" 
            name="lastName" 
            value={formData.lastName} 
            onChange={handleChange} 
            placeholder="Last Name" />

            <input 
            type="number"
            name="bountyAmount" 
            value={formData.bountyAmount} 
            onChange={handleChange} 
            placeholder="Bounty Amount" />

            <button>{props.buttonText}</button>

        </form>
    )
}