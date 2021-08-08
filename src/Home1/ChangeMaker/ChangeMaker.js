import React from 'react';
import L from '../../utils/localization';

import './../Home1.css';

import students from '../../images/home/students.png';
import collegeanduniversities from '../../images/home/collegeanduniversities.png';
import start_up from '../../images/home/start_up.png';
import volunteer from '../../images/home/volunteer.png';
import config from '../../config/config';

const appRoute = config.appRoute;

const ChangeMaker = () => {
	return (
		<div>
			<h2>{L.t('home.thirdBannerHeading')}</h2>
			<div className="hr-line" />
			<p>{L.t('home.thirdBannerHeadingDescription')}</p>
			<h3>{L.t('home.thirdBannerSubHeading')}</h3>
			<div className='change-maker-category'>
				<div>
					<img alt='Student Change Maker' src={students}/>
				</div>
				<div>
					<img alt='Institute Change Maker' src={collegeanduniversities}/>
				</div>
				<div>
					<img alt='Start Up' src={start_up}/>
				</div>
				<div>
					<img alt='Volunteers' src={volunteer}/>
				</div>
			</div>
			<span className='change-maker-button'><a href={`${appRoute}/workWithUs`} className='change-maker-button'  >{L.t('home.thirdBannerBeAChangeButton')}</a></span>
			{/* <button 
			className='change-maker-button' 
			>
			{L.t('home.thirdBannerBeAChangeButton')}
			</button> */}
		</div>
	);
}

export default ChangeMaker;
