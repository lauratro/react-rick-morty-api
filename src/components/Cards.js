import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import ModalCreator from "./Modal";
import './Cards.css';

function CharacterCards(props) {
    
    let dataFetch = props.character;
       
 
    let myStyleImg = {
        width: 300,
        height: 300
    }
    return (<CardGroup id="CardGroup">
        <Row className="d-flex">
           
        {dataFetch.length ?
            dataFetch.map(character => {
                return <Card className="p-3" key={character.id}>
                < div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={character.image} alt="Character picture" style={myStyleImg} />
            </div>
            <div className="flip-card-back">
                       <h1>{character.name}</h1>
                       <p>{character.status }</p>
                              <ModalCreator myData={character} />
            </div>
        </div>
                    </div>
                     
            </Card>
           })
                : <Container className="loading-container">
                    <Row><Col xs={12}><div className="loader"></div></Col></Row>
                    
                </Container>
                  
            }
                   </Row>
         </CardGroup>
   )
}
export default CharacterCards;
