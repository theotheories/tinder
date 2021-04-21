import React, {
  useState
} from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([{
      name: "Danny DeVito",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg/440px-Danny_DeVito_cropped_and_edited_for_brightness.jpg",
    },
    {
      name: "Sofia Coppola",
      url: "https://m.media-amazon.com/images/M/MV5BMTcxODIwMDMzOF5BMl5BanBnXkFtZTgwMDE5MTU0MDE@._V1_.jpg",
    },
  ]);

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
          style={{ backgroundImage: `url(${person.url})`}}>
<h3>{person.name}</h3>
          </div>
        </TinderCard>
      ))} 
      </div>
    </div>
  )
};


export default TinderCards;