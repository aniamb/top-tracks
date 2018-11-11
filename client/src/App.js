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
	topTracks: {name:''},
	topTracks2: {name:''},
	topTracks3: {name:''},
	topTracks4: {name:''},
	topTracks5: {name:''},
	topTracks6: {name:''},
	topTracks7: {name:''},
	topTracks8: {name:''},
	topTracks9: {name:''},
	topTracks10: {name:''}
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
       name: response.items[0].name
     },
     topTracks2: {
	name: response.items[1].name
     },
     topTracks3: {
	name: response.items[2].name
     },
     topTracks4: {
	name: response.items[3].name
     },
     topTracks5: {
	name: response.items[4].name
     },
     topTracks6: {
	name: response.items[5].name
     },
     topTracks7: {
	name: response.items[6].name
     },
     topTracks8: {
	name: response.items[7].name
     },
     topTracks9: {
	name: response.items[8].name
     },
     topTracks10: {
	name: response.items[9].name
     }

   });
 })
}
  render() {
    return (
	 <div className="App">
     	<a href='http://localhost:8888'> Login to Spotify </a>
	<div>
		#1: {this.state.topTracks.name}
			<br></br>
		#2: {this.state.topTracks2.name}
			<br></br>
		#3: {this.state.topTracks3.name}
			<br></br>
		#4: {this.state.topTracks4.name}
			<br></br>
		#5: {this.state.topTracks5.name}
			<br></br>
		#6: {this.state.topTracks6.name}
			<br></br>
		#7: {this.state.topTracks7.name}
			<br></br>
		#8: {this.state.topTracks8.name}
			<br></br>
		#9: {this.state.topTracks9.name}
			<br></br>
		#10: {this.state.topTracks10.name}

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
