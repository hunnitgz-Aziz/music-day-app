import React, {Component} from 'react';
import classNames from 'classnames';
import Header from './header';
import Artwork from '../components/album';

export default class AlbumContainer extends React.Component { 
 render() {
 	return (
 		<div classname="main-body">
	 		<Header />
	 		<Artwork />
 		</div>
 	);
 }
}