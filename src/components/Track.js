import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Track(props){
    return(
        <div>
            <p><strong>{props.name}</strong> by {props.artist} | Album: {props.album} <FontAwesomeIcon icon={faPlus}/></p>
        </div>
    )

}

export default Track;