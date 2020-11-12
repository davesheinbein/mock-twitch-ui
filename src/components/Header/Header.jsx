import { Avatar } from '@material-ui/core';
import React from 'react';
import logo from '../../images/fakeTwitch.png';
import './style/Header.css';

function Header() {
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src={logo}
					alt='Fake Twitch Logo'
					className='header__leftLogo'
				/>
				<h2>Following</h2>
				<h2>Browse</h2>
				<div className='header__verticalLine'></div>
				<h2>Esports</h2>
				<h2>Music</h2>
				<i className='fas fa-ellipsis-h'></i>
			</div>
			<div className='header__center'>
				<input type='text' placeholder='Search' />
				<div className='header__centerLogoContainer'>
					<i className='fas fa-search'></i>
				</div>
			</div>
			<div className='header__right'>
				<div className='header__rightContainer'>
					<i className='fas fa-crown'></i>
					<i className='fa fa-inbox' aria-hidden='true'></i>
					<i className='fas fa-comment-alt'></i>

					<div className='header__rightBits'>
						<i className='fas fa-gem'></i>
						<h4>Get Bits</h4>
					</div>

					<Avatar />
				</div>
			</div>
		</div>
	);
}

export default Header;
