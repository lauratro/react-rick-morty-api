import React from "react";

import Row from "react-bootstrap/Row";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ModalCreator from "./Modal";
import "../styles/Cards.css";

function CharacterCards(props) {
  let characters = props.character;
  let searchTerm = props.searchTerm;
  const filteredCharacters = searchTerm
    ? characters.filter((character) =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : characters;
  let myStyleImg = {
    width: 300,
    height: 300,
  };
  return (
    <CardGroup id="CardGroup">
      <Row className="d-flex justify-content-center">
        {filteredCharacters.map((character) => {
          return (
            <Card className="p-3" key={character.id}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img
                      src={character.image}
                      alt="Character picture"
                      style={myStyleImg}
                    />
                  </div>
                  <div className="flip-card-back">
                    <h1>{character.name}</h1>
                    <p>{character.status}</p>
                    <ModalCreator myData={character} />
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </Row>
    </CardGroup>
  );
}
export default CharacterCards;
