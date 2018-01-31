import React, {Component} from 'react';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';
import AlbumList from './album_list';


export default class Carousel extends React.Component {
	render() {
		return (
			<ReactSwipe className="carousel" swipeOptions={{continous: false}}>
				// <AlbumList />
			</ReactSwipe>
		)
	}
}