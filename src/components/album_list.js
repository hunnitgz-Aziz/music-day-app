import React, {Component} from 'react';
import classNames from 'classnames';
import AlbumComponent from '../api.js';
import AlbumInfo from './album_info';
import Artwork from './album';
import ProviderLink from './provider_links';
import ReactSwipe from 'react-swipe';
import ReactDOM from 'react-dom';
import Carousel from 'nuka-carousel';

const AlbumList = ({albums}) => (
   <Carousel className="albums-list-container slider">
    {albums.map(album => 
      <div key={album.id} className="album-day-block">
        <Artwork album_cover={album.album_cover}/>
	      <AlbumInfo 
	      		album_name={album.album_name}
	      		artist={album.artist}
	      		release_date={album.release_date} />
	      <ProviderLink provider_link={album.provider_link}/>
      </div>
    )}
  </Carousel>
)

export default AlbumList;
