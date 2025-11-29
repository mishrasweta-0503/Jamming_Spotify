import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Track(props){
    function handleAddTrack(){
        props.addTrack(props.track)
    }
    return(
        <div>
            <p><strong>{props.track.name}</strong> by {props.track.artist} | Album: {props.track.album} <FontAwesomeIcon icon={faPlus} onClick={handleAddTrack}/></p>
        </div>
    )

}

export default Track;