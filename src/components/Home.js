import React, { useState, useEffect } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardGroup from 'react-bootstrap/CardGroup'
import SearchBar from './NavBar';
import CharacterCards from './Cards';



function Home() {
    const [characters, setCharacters] = useState([]);
     const [filteredData, setFilteredData] = useState(characters);
    let fetchApi = () => {
        fetch("https://rickandmortyapi.com/api/character/").then((response )=> response.json())
            .then((data) => {
                setCharacters(data.results);
               setFilteredData(data.results);
    })
    }
    useEffect(() => {
        fetchApi();
    }
        
    );

const handleSearch = (event) => {
    
let value = event.target.value.toLowerCase();
let result = [];
console.log(value);
result = characters.filter((data) => {
return data.title.search(value) != -1;
});
setFilteredData(result);
}
    
  
    return (
        
         <React.Fragment>
            <SearchBar character={characters} onChange={handleSearch()}/>
           
        <CharacterCards  character={characters} />
           
                  

    </React.Fragment>         
)
           
}
export default Home;
