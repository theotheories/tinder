import React, { useState } from "react";
import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Danny DeVito",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Danny_DeVito_cropped_and_edited_for_brightness.jpg/440px-Danny_DeVito_cropped_and_edited_for_brightness.jpg",
    },
  ]);

  return (
    <div className="tinderCards">
      {people.map((person) => (
        <h1>{person.name}</h1>
      ))}
      )
    </div>
  );
}

export default TinderCards;
