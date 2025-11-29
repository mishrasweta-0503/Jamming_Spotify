import React from 'react';
import Track from './Track.js';

function SearchResults(props){
    return(
        <div>
            <h1>Search Results</h1>
            {props.searchResults.map((result) => <Track key={result.id} track={result} addTrack={props.addTrack}/> )}
        </div>
    )
}

export default SearchResults;