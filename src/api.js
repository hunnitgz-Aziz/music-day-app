import React, {Component} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';

export default class AlbumComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

    componentDidMount() {
      fetch("https://s3.us-east-2.amazonaws.com/album-of-the-day/albums.json")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            albums: result.albums
          });
        },

        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    }

    render() {
      const { error, isLoaded, albums } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <ul>
            {albums.map(album => 
              <li key={album.id}>
                <img src={album.album_cover}/>
                {album.album_name} 
                {album.artist}
                {album.release_date}
              </li>
            )}
          </ul>
        )
      }
    }
  }
