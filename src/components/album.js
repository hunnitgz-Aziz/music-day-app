import React, {Component} from 'react';
import classNames from 'classnames';
import AlbumComponent from '../api.js';

export default class Artwork extends Component {
	render() {
		return (
			<img src={this.props.album_cover}/>
		)
	}
}