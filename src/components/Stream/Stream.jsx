import React from 'react';
import './style/Stream.css';

const Stream = ({ indicator }) => {
	return (
		<div className='stream'>
			<div className='stream__container'>
				<div className='stream__status'>
					<div className='stream__statusContainer'>
						<div className='stream__statusContainerTop'>
							<div className='stream__statusIndicator'>
								OFFLINE
							</div>
							<h2>
								Check out the below streams from JohnDoe
							</h2>
						</div>
					</div>
					<div className='stream__statusInfo'>
						<i
							className='fa fa-bell'
							aria-hidden='true'></i>
						<p>You wil be notified when JohnDoe is live</p>
					</div>
				</div>
			</div>
			<div className='stream__videoEmbed'>
				<iframe
					src='https://www.youtube.com/embed/eOhCtwFB0_I'
					frameborder='0'
					width='500'
					height='295'
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
					allowFullScreen={true}></iframe>
			</div>
		</div>
	);
};

export default Stream;
