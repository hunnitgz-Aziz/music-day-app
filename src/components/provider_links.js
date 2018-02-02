import React, {Component} from 'react';
import classNames from 'classnames';
import AlbumComponent from '../api.js';

export default class ProviderLink extends Component {
	render() {
		return (
			<div className="provider-link-container fade-in three">
				<a target="_blank" href={this.props.provider_link}><span>Listen Now +</span></a>
			</div>
		)
	}
}