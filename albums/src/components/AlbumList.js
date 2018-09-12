import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  state = { albums: [] };
  //it will render empty album list initaially without the value but needs to update

  componentWillMount(){
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState({ albums: response.data }));
    //albums data was available on response at data so -> response.data
    //passing an object to setState, it won't be empty [], it will have data passed on
    //setState -> extends component -> here's new data so do "new render!!!!!!!" only way to update!!!!

//console.log('componentWillMount in Albumlist');
//debugger; -> debugger->source, goes straight to where you want to debug
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album}/>
//album 주황색은 variable 이름으로 아무거나 해도 /props name
//map -> each
  );
  }

  render() {
    console.log(this.state);

      return (
        <ScrollView>
          {this.renderAlbums()}
        </ScrollView>
    );
  }
}

export default AlbumList;
