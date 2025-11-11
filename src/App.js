import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import React, { useState } from 'react';

function App() {
  const[playlistTracks,setplaylistTracks] = useState([{id:1,name:"tum se hi",artist:"mohit chauhan",album:"jab we met"},
    {id:2,name:"suraj hua madham",artist:"sonu nigam",album:"k3g"},
    {id:3,name:"kun faya",artist:"mohit chauhan",album:"rockstar"}
  ]);

  function addTrack(track){
    const idtofind = playlistTracks.find(playtrack => playtrack.id === track.id)
    if(!idtofind){
      setplaylistTracks([...playlistTracks, track])
    }
  }

  return (
    <div>
      <div className="header">
        <h1>Jammming</h1>
      </div>
      <SearchBar />
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <SearchResults />
        <Playlist />
      </div>
    </div>
  );
}

export default App;
