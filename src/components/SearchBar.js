import React from 'react';
import SearchBarStyle from '../styles/style.js'
const Input = function (props) {
    console.log("props in Input:", props)

    const handleChange = event => {
        props.onChange(event.target.value)
    }

    return (
       <div style={SearchBarStyle()}>
            <input  type="text" placeholder="Search" className="mr-sm-2 my-4 p-2 textSearch" onChange={handleChange} />
         </div>
    )
}

export default Input;