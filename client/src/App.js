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
	topTracks: {name:'', artist:' '},
	topTracks2: {name:'', artist:' '},
	topTracks3: {name:'', artist:' '},
	topTracks4: {name:'', artist:' '},
	topTracks5: {name:'', artist:' '},
	topTracks6: {name:'', artist:' '},
	topTracks7: {name:'', artist:' '},
	topTracks8: {name:'', artist:' '},
	topTracks9: {name:'', artist:' '},
	topTracks10: {name:'', artist:' '}
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
       name: response.items[0].name,
       artist: response.items[0].artists[0].name
     },
     topTracks2: {
	name: response.items[1].name,
       artist: response.items[1].artists[0].name
     },
     topTracks3: {
	name: response.items[2].name,
       artist: response.items[2].artists[0].name
     },
     topTracks4: {
	name: response.items[3].name,
       artist: response.items[3].artists[0].name
     },
     topTracks5: {
	name: response.items[4].name,
       artist: response.items[4].artists[0].name
     },
     topTracks6: {
	name: response.items[5].name,
       artist: response.items[5].artists[0].name
     },
     topTracks7: {
	name: response.items[6].name,
       artist: response.items[6].artists[0].name
     },
     topTracks8: {
	name: response.items[7].name,
       artist: response.items[7].artists[0].name
     },
     topTracks9: {
	name: response.items[8].name,
       artist: response.items[8].artists[0].name
     },
     topTracks10: {
	name: response.items[9].name,
       artist: response.items[9].artists[0].name
     }

   });
 })
}
  render() {
    return (
	 <div className="App">
	<br></br>
     	<a href='http://localhost:8888'> Login to Spotify </a>
	<br></br>
	<div className = "Tracks">
		#1: {this.state.topTracks.name} - {this.state.topTracks.artist}
			<br></br>
		#2: {this.state.topTracks2.name} - {this.state.topTracks2.artist}
			<br></br>
		#3: {this.state.topTracks3.name} - {this.state.topTracks3.artist}
			<br></br>
		#4: {this.state.topTracks4.name} - {this.state.topTracks4.artist}
			<br></br>
		#5: {this.state.topTracks5.name} - {this.state.topTracks5.artist}
			<br></br>
		#6: {this.state.topTracks6.name} - {this.state.topTracks6.artist}
			<br></br>
		#7: {this.state.topTracks7.name} - {this.state.topTracks7.artist}
			<br></br>
		#8: {this.state.topTracks8.name} - {this.state.topTracks8.artist}
			<br></br>
		#9: {this.state.topTracks9.name} - {this.state.topTracks9.artist}
			<br></br>
		#10: {this.state.topTracks10.name} - {this.state.topTracks10.artist}
			<br></br>
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
