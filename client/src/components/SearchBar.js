import React from 'react';

// const GetSearchBar = () => (
//     <div>
//         <input id="search" className="searchBar" value="" ></input>
//         <button>Search</button>
//     </div>
// )

const Search = () => {
    let searchQuery = document.getElementById('search').val()
    $.get(`/api/drugs/${searchQuery}`)
    .then((result) => {
        (console.log(result))
    })
    <div>
        <h1>`${result[0]}`</h1>
    </div>


export default GetSearchBar;