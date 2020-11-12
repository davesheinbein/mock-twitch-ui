import React from 'react';
import userA from '../../images/user01.jpg';
import RecentItems from '../RecentItems/RecentItems';
import './style/Profile.css';

const Profile = () => {
	return (
		<div className='profile'>
			<div className='profile__top'>
				<div className='profile__topLeft'>
					<img src={userA} alt='User Profile' />

					<div className='profile__topLeftDetails'>
						<h1>JohnDoe</h1>
						<h3>299k followers</h3>
					</div>
				</div>
			</div>
			<div className='profile__topRight'>
				<i
					className='fa fa-heart graybg'
					aria-hidden='true'></i>
				<i
					className='fa fa-bell graybg'
					aria-hidden='true'></i>
				<i
					className='fa fa-ellipsis-v'
					aria-hidden='true'></i>
			</div>

			<div className='profile__menu'>
				<h2 className='active'>Home</h2>
				<h2>About</h2>
				<h2>Schedule</h2>
				<h2>Videos</h2>
				<h2>
					<i className='fas fa-arrow-up'></i>
				</h2>
				<h2>Chat</h2>
			</div>

			<div className='profile__recent'>
				<h2>Recent Broadcasts</h2>
				<div className='profile__recentItems'>
					<RecentItems
						url={
							'https://www.youtube.com/embed/ccDXymyXfjs'
						}
						title={'Totally Random #1'}
					/>
					<RecentItems
						url={
							'https://www.youtube.com/embed/vSo383TzHxw'
						}
						title={'Totally Random #6'}
					/>
					<RecentItems
						url={
							'https://www.youtube.com/embed/XF086H9gKeo'
						}
						title={'Totally Random #9'}
					/>
					<RecentItems
						url={
							'https://www.youtube.com/embed/t-5-egG_KOw'
						}
						title={'Totally Random #10'}
					/>
				</div>

				<div className='profile__categories'>
					<img
						src='https://source.unsplash.com/random/400x400'
						alt='portfolioImg'
					/>
					<h2>JohnDoe recently streamed categories</h2>
					<h3>Mysteries & Exploration</h3>
				</div>
			</div>
		</div>
	);
};

export default Profile;
