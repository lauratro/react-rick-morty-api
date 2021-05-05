import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../styles/Loading.css'

function LoadingWheel() {
  return (
    <Container className="loading-container">
      <Row>
        <Col xs={12}>
          <div className="loader"></div>
        </Col>
      </Row>
    </Container>
  );
}

export default LoadingWheel;

/* import React, { useState, useEffect } from 'react';
import CharacterCards from './Cards';
import './Cards.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import isLoading1 from './isLoading';


function Home() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [search, setSearch] = useState("");
    let fetchApi = () => {
        fetch("https://rickandmortyapi.com/api/character/").then((response) => response.json())
            .then((data) => {   
                setCharacters(data.results);
                 setIsLoading(false)
            
            
            })
    }
   
    
  
    useEffect(() => {
        
     
           
            if (search === "") {
               
                fetchApi();
                
            }
            else {
                setCharacters(characters.filter(character => {
                    return character.name.toLowerCase().includes(search.toLowerCase())
                }))
                
            
    
            }
        
        }, [search]
   
      
        )
 

    
   
  
    return (
        
        <React.Fragment>
            <input type="text" placeholder="Search" className="mr-sm-2 " onChange={event=>setSearch(event.target.value)} />
         
            {!isLoading ?
                <div>
        <CharacterCards  character={characters} />
           <div class="btnCounter-container">
                  <button type="button" value="minus" >Prev</button>
    <span id="number">1</span>
    <button type="button" value="plus">Next</button>
                    </div>
                    </div> :  <Container className="loading-container">
                    <Row><Col xs={12}><div className="loader"></div></Col></Row>
                    
                </Container>
}
    </React.Fragment>         
)
           
}
export default Home;

 */
