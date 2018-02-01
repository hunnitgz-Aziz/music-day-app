import React, {Component} from 'react';
import classNames from 'classnames';
import AlbumInfo from '../components/album_info';
import ProviderLink from '../components/provider_links';

export default class Header extends Component {
	render() {
		return (
			<div className="header-wrap">
				<h2>Album of the Day</h2>
			</div>
		)
	}
}