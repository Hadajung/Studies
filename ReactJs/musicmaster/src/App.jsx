import React, { Component } from 'react';
import Profile from './Profile';
import Gallery from './Gallery';
import './App.css';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {
      //console.log('this.state', this.state);
      const BASE_URL = 'https://api.spotify.com/v1/search?';
      let FETCH_URL = BASE_URL + 'q=' + this.state.query + '&type=artist&limit=1';
      //console.log('FETCH_URL', FETCH_URL);
      const ALBUM_URL = '	https://api.spotify.com/v1/artists/';
      let accessToken = 'BQCxoSJu7HDAiAFLFQ0Yp9VwBzS1nI-FxeGPllrFs8B5PA2QgLlDcmRK5auYkfhspUMDgkgHJYx39EKw6ULHcuz45HJ1qVcpVzhkkIlHPrc4ykWXdTllR2v3nH7tOrYURQ51euddONJcrA'

      let myOptions = {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + accessToken
        },
        mode: 'cors',
        cache: 'default'
      };

      fetch(FETCH_URL, myOptions)
      .then(response => response.json())
      .then(json => {
        const artist = json.artists.items[0];
        this.setState({artist: artist});

        FETCH_URL = ALBUM_URL + artist.id + '/top-tracks?country=US&';
        fetch(FETCH_URL, myOptions)
        .then(response =>response.json())
        .then(json => {
          console.log(json);
          //const tracks = json.tracks;
          //under : very useful multiple things. tracks, artists, genres whatever can go inside {}
          const { tracks } = json;
          this.setState({tracks:tracks});
        })

      })
      .catch((error) => {
        console.log(error);
        alert("Can't find your artist!!!");
      });


  }

  render() {
    return (
      <div className="App">
        <div className="App-title">Music Master</div>
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for an artist..."
              value={this.state.query}
              onChange={event => {this.setState({query: event.target.value})}}
              onKeyPress={event => {
                if(event.key === 'Enter'){
                  this.search()
                }
              }}
            />
          <InputGroup.Addon onClick={() => this.search()}>
              <Glyphicon glyph="search"></Glyphicon>
            </InputGroup.Addon>
          </InputGroup>
        </FormGroup>
        {
          this.state.artist !== null ?
          <div>
            <Profile
              artist={this.state.artist}
            />
            <Gallery
              tracks={this.state.tracks}
              />
          </div>
        : <div></div>
        }
      </div>
    )
  }
}

export default App;
