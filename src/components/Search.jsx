import React from 'react'


const Search = ({searchTerm, setSearchTerm}) => {
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="" />
            <input type="text" className="text" placeholder='Thousands of movie. Search for any you want' value={searchTerm} onChange={(e)=> setSearchTerm(e.target.value)}/>
        </div>
    </div>
  )
}

export default Search