import React from 'react';
import styles from '../styles/SearchResults.module.css';
import Track from './Track.js';

function SearchResults(props){
    const searchResults = [{id:1,name:"Shape of you",artist:"ed sheeren",album:"divide"},
        {id:2,name:"cruel summer",artist:"taylor swift",album:"reputation"},
        {id:3,name:"thank u next",artist:"ariana grande",album:"sweetener"}
      ];
    return(
        <div>
            <h1>Search Results</h1>
            {searchResults.map((result) => <Track key={result.id} name={result.name} artist={result.artist} album={result.album} /> )}
        </div>
    )
}

export default SearchResults;