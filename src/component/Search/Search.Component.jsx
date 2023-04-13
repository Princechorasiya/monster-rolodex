import React from 'react'
import "./search.css";
const Search = ({placeholder,handleChange}) => {
  return (
    <>
      <input
					type='search'
        placeholder={placeholder }
					onChange={handleChange}
				/>
    </>
  )
}
//functions dont have acccess to state and no life cycle methods easier to test and

// where to put the state 
// why not put eh state the state 
// what changes when state changes 
// other component card needs the info we need state which we pass to serch 
// there is no way  for card component to acess state if its in search 
  
// we keep state at a place where it can be accessed by all components that nedd them 

export default Search