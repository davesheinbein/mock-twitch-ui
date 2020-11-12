import React from 'react';
// images
import userA from '../../images/user01.jpg';
import userB from '../../images/user02.jpg';
import userC from '../../images/user03.jpg';
// components
import Channel from '../Channel/Channel';
import './style/Sidebar.css';

function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebar__top'>
				<h5>FOLLOWED CHANNELS</h5>
				<Channel
					avatar={userA}
					name='JohnDoe'
					followers='299k'
				/>
				<Channel
					avatar={userB}
					name='MaltildaFlowers'
					followers='109k'
				/>
				<h5>RECOMMENDED CHANNELS</h5>
				<Channel
					avatar={userC}
					name='PrimitiveSurvivalTool '
					followers='450k'
				/>
				<p className='sidebar__topShowMore'>Show More</p>
			</div>
			<div className='sidebar__bottom'>
				<div className='sidebar__bottomContainer'>
					<i
						className='fa fa-search'
						aria-hidden='true'></i>
					<input
						type='text'
						placeholder='Search to Add Friends'
					/>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
