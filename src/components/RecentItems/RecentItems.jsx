import React from 'react';
import './style/RecentItems.css';

const RecentItems = ({ url, title }) => {
	return (
		<div className='item'>
			<iframe
				width='400'
				height='235'
				src={url}
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
				allowFullScreen={true}></iframe>
			<div className='item__details'>
				<img
					src='https://source.unsplash.com/random/400x400'
					alt='Details'
				/>
				<div className='item__detailsText'>
					<h4>{title}</h4>
					<p>JohnDoe</p>
					<p>Mysteries & Exploration</p>
				</div>
			</div>
		</div>
	);
};

export default RecentItems;
