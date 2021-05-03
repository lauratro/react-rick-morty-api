import React, { useState, useEffect }from 'react';

import SearchBar from './NavBar';
import CharacterCards from './Cards';


function Home() {
    const [characters, setCharacters] = useState("");
    let fetchApi = () => {
        fetch("https://rickandmortyapi.com/api/character/").then((response )=> response.json())
            .then((data) => {
                setCharacters(data.results);
    })
    }
    useEffect(() => {
        fetchApi();
    }
        
    );



  
    return (
        <div>
        <SearchBar />
            <CharacterCards myData={ characters}/>
</div>
)  
}
export default Home;