import React from 'react'
import './index.css';
import { useState } from 'react';

    //quote generator
    const Headeer =()=>{
      const[name,setName]=useState("I think, therefore I am. s");
      function change(){
        
      const names=[
      "I think, therefore I am. s",
      "Time is money. – Benjamin Franklin",
      "I came, I saw, I conquered. – Julius Caesar",
      "When life gives you lemons, make lemonade. – Elbert Hubbard",
      "Practice makes perfect. – Vince Lombardi",
      "Knowledge is power.– Francis Bacon",
      "It does not matter how slowly you go as long as you do not stop. – Confuciu]"]
      const int=Math.floor(Math.random()*7)
      setName( names[int])    }
   //const HeadeerStyle={ backgroundcolor:'mediumblue'}
  return (
    //<Headeer style={HeadeerStyle}>
    <body>
      <img src="logo512.png"></img>
    <main>
      <p> {name} </p>
      <button onClick={change}>NEXT</button>
    </main>
    </body>
  )

}


export default Headeer