import React, { useState, useEffect } from 'react';
import CharacterCards from './Cards';
import isLoading from './isLoading';


function Home() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    
    const [search, setSearch] = useState("");
    let fetchApi = () => {
        fetch("https://rickandmortyapi.com/api/character/").then((response )=> response.json())
            .then((data) => {
                   setIsLoading(false)
                 setCharacters(data.results);
            
            
    })
    }
   
   
    useEffect(() => {
        if (isLoading) {
         
            if (search === "") {
               
                fetchApi();
                
            }
            else {
                setCharacters(characters.filter(character => {
                    return character.name.toLowerCase().includes(search.toLowerCase())
                }))
                
            }
        }
            else {
                <isLoading />
            }
    
  
    
    },[search]
        
    );  


   
  
    return (
        
        <React.Fragment>
            <input type="text" placeholder="Search" className="mr-sm-2 " onChange={event=>setSearch(event.target.value)} />
         
           
        <CharacterCards  character={characters} />
           
                  

    </React.Fragment>         
)
           
}
export default Home;
