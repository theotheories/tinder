import React, { useState, useEffect } from "react";
import axios from "./axios";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([]);
  
  // useEffect=componentDidMount, when it loads, it will run this code once only
  // [] at end contains variables that once changed will cause this code to be run again, only if they change
  // this is the standard async syntax for this usage
  // hook
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/tinder/cards");
      
      setPeople(request.data);
    }
    //then make sure to call this function just defined
    fetchData();
  }, []);

  console.log(people);

  const swiped = (nameToDelete) => {
    console.log("removing", nameToDelete);
    // extra param direction, 
    //   setLastDirection(direction);
  };

  const outOfFrame = (nameLeavingScreen) => {
    console.log(nameLeavingScreen, "left the screen");
  }

  return ( 
  <div className = "tinderCards" >
    <div className = "tinderCards__cardContainer" > {
      people.map((person) => ( 
        <TinderCard
        className = "swipe"
        key = {person.name}
        preventSwipe = {["up", "down"]}
        onSwipe = {() => swiped(person.name)}
        onCardLeftScreen = {() => outOfFrame(person.name)}
        >
          <div
          className="card"
          style={{ backgroundImage: `url(${person.imgUrl})`}}>
            <h2>{person.name}</h2>
          </div>
        </TinderCard>
      ))} 
      </div>
    </div>
  )
};


export default TinderCards;