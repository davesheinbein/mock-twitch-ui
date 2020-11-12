import React from 'react';
import userA from '../../images/user01.png';
import userB from '../../images/user02.png';
import userC from '../../images/user03.png';
import './style/Sidebar.css';

function Sidebar() {
	return (
		<div className='sidebar'>
			<h5>FOLLOWED CHANNELS</h5>
			<Channel
				avatar={userA}
				name='testing'
				followers='99K'
			/>
			<Channel
				avatar={userB}
				name='testing'
				followers='99K'
			/>
			<h5>RECOMMENDED CHANNELS</h5>
			<Channel
				avatar={userC}
				name='testing'
				followers='99K'
			/>
			<p className='sidebar__topShowMore'>Show More</p>
		</div>
	);
}

export default Sidebar;
