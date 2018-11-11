import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js'
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(params);
    if (token) {
	spotifyApi.setAccessToken(token);
	}
    this.state = {
	loggedIn: token ? true : false,
	topTracks: {name: 'not checked', artist:'unknown'}
    }
  }

  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  getTopTracks() {
 spotifyApi.getMyTopTracks()
 .then((response) => {
   this.setState({
     topTracks: {
       name: response.item.name
     }

   });
 })
}
  render() {
    return (
      <div className="App">
     	<a href='http://localhost:8888'> Login to Spotify </a>
	<div>
		Top Tracks: {this.state.topTracks.name}
	</div>
	<div>
		Top Artists: {this.state.topTracks.artist}
	</div>
	{ this.state.loggedIn &&
		<button onClick={() => this.getTopTracks()}>
			Get Top Tracks
		</button>
	}
	 </div>
    );
  }
}
export default App;
