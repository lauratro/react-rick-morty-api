import React, { useState, useEffect } from 'react';
import CharacterCards from './Cards';
import '../styles/Home.css'
import LoadingWheel from './Loading';
import SearchBarStyle from '../styles/style.js'
import Input from './SearchBar'


function Home() {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(1);
    const [search, setSearch] = useState("");




    let fetchApi = () => {
        fetch(`https://rickandmortyapi.com/api/character/?page=${count}`).then((response) => response.json())
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
        
    }, [search, count]
   
      
    )
 
    const onchange = (data) => {
        setSearch(data);

}

        // Create handleIncrement event handler
        const handleIncrement = () => {
            setCount(prevCount => prevCount + 1);
        };

        //Create handleDecrement event handler
        const handleDecrement = () => {
            setCount(prevCount => prevCount - 1);
        };
    
   
  
    return (
        
        <React.Fragment>
           {/*  <div style={SearchBarStyle()}>
            <input  type="text" placeholder="Search" className="mr-sm-2 my-4 p-2 textSearch" onChange={event=>setSearch(event.target.value)} />
         </div> */}
            <Input data={search} onchange={(e)=>{onchange(e)}} />
            {!isLoading ?
                <React.Fragment>
        <CharacterCards  character={characters} />
           <div className="btnCounter-container">
                        <button className="font-weight-bold" onClick={handleDecrement} disabled = {count  === 1 ?true: false }>{"<"}</button>
        <h5 className="mx-2">Page nr: {count}</h5>
                        <button class="font-weight-bold" onClick={handleIncrement} disabled = {count  === 34 ?true: false }>{">"}</button>
                        </div>
                    </React.Fragment> :   <div><LoadingWheel /></div>
} 
    </React.Fragment>         
)
           
}
export default Home;
