import React from "react";

export default function WorkoutList(props){
    console.log(props)
    return (
        <div>
            <h1>Title: {props.title}</h1>
            <p>Instructions: {props.instructions}</p>
        </div>
    )
}