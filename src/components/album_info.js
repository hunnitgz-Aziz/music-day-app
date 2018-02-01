import React, {Component} from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import AlbumComponent from '../api.js';
import AlbumList from './album_list';


export default class AlbumInfo extends Component {
	render() {
		return (
			<div className="album-info-container fade-in three">
				<p>{this.props.album_name}</p>
        <p>{this.props.artist}</p>
        <p>{this.props.release_date}</p>
			</div>
		)
	}
}