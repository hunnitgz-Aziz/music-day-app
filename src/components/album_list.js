import React, {Component} from 'react';
import classNames from 'classnames';
import AlbumComponent from '../api.js';
import AlbumInfo from './album_info';
import Artwork from './album';
import ProviderLink from './provider_links';
import ReactSwipe from 'react-swipe';
import ReactDOM from 'react-dom';

const AlbumList = ({albums}) => (
   <ReactSwipe className="albums-list-container carousel" swipeOptions={{continuous: true}}>
    {albums.map(album => 
      <div key={album.id} className="album-day-block">
	      <AlbumInfo 
	      		album_name={album.album_name}
	      		artist={album.artist}
	      		release_date={album.release_date} />
	      <ProviderLink provider_link={album.provider_link}/>
        <Artwork album_cover={album.album_cover}/>
      </div>
    )}
  </ReactSwipe>
)

export default AlbumList;
