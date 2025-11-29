import './App.css';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Playlist from './components/Playlist';
import React, { useState } from 'react';
import Spotify from './Spotify.js';

function App() {
  const [searchResults,setsearchResults] = useState([]);

  const [playlistTracks,setplaylistTracks] = useState([{id:4,name:"tum se hi",artist:"mohit chauhan",album:"jab we met",uri:""},
    {id:5,name:"suraj hua madham",artist:"sonu nigam",album:"k3g",uri:""},
    {id:6,name:"kun faya",artist:"mohit chauhan",album:"rockstar",uri:""}
  ]);

  const[input,setInput] = useState('');

  function handleInputChange(e){
    setInput(e.target.value);
    console.log("Playlist name:", e.target.value);
  }

  function addTrack(track){
    const idtofind = playlistTracks.find(playtrack => playtrack.id === track.id)
    if(!idtofind){
      setplaylistTracks(playlistTracks => [...playlistTracks, track])
    }
  }

  function removeTrack(track){
    const updatedTracks = playlistTracks.filter(item => item.id !== track.id)
    setplaylistTracks(updatedTracks)
  }

  function savePlaylist(){
    if(!input){
      return alert('Playlist name cannot be empty')
    }
    if(playlistTracks.length === 0){
      return alert('Playlist Track cannot be empty')
    }
    console.log('saving the playlist: ',input)
    console.log('saving the tracks: ',playlistTracks)
    setInput('');
    setplaylistTracks([]);
  }

  function handleSearch(term){
    const results = Spotify.search(term);
    setsearchResults(results);
  }

  return (
    <div>
      <div className="header">
        <h1>Jammming</h1>
      </div>
      <SearchBar onSearch={handleSearch}/>
      <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <SearchResults searchResults={searchResults} addTrack={addTrack} onSearch={handleSearch}/>
        <Playlist playlistTracks={playlistTracks} removeTrack={removeTrack} value={input} inputChange={handleInputChange} savePlaylist={savePlaylist}/>
      </div>
    </div>
  );
}

export default App;
