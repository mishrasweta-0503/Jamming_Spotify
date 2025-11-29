import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

function Playlist(props){
    function handlremoveTrack(track){
        props.removeTrack(track)
    }
    return(
        <div>
            <input type="text" value={props.value} placeholder="Enter your playlist name" onChange={props.inputChange}/>
            {props.playlistTracks.map((song) => <p key={song.id}> {song.name} | {song.artist} | {song.album} <FontAwesomeIcon icon={faMinus} onClick={() => handlremoveTrack(song)}/></p> )}
            <button onClick={props.savePlaylist}>Save to Spotify</button>
        </div>

    )

}

export default Playlist;