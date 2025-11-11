import React, { useState } from 'react';
import Track from './Track.js';

function Playlist(props){
    const playlistTracks = [{id:1,name:"tum se hi",artist:"mohit chauhan",album:"jab we met"},
        {id:2,name:"suraj hua madham",artist:"sonu nigam",album:"k3g"},
        {id:3,name:"kun faya",artist:"mohit chauhan",album:"rockstar"}
      ];
    const[input,setInput] = useState('')
    function handleInputChange(e){
        setInput(e.target.value)
    }
    return(
        <div>
            <input type="text" value={input} placeholder="Enter your playlist name" onChange={handleInputChange}/>
            {playlistTracks.map((song) => <p key={song.id}> {song.name} | {song.artist} | {song.album} </p> )}
            <button>Save to Spotify</button>
        </div>

    )

}

export default Playlist;