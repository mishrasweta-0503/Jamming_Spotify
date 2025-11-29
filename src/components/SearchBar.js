import React, { useState } from 'react';
import styles from '../styles/SearchBar.module.css';

function SearchBar({onSearch}){
    const[value1,setValue] = useState('');

    function handleInputChange(e){
        setValue(e.target.value)
    }

    function handleSearchButton(){
        onSearch(value1)
    }
    return(
        <div className={styles.input}>
            <input type="text" placeholder="Enter a song title" onChange={handleInputChange}/>
            <div>
                <button onClick={handleSearchButton}>Search</button>
            </div>
        </div>
    )

}

export default SearchBar;