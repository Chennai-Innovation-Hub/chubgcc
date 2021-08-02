import React from 'react';
import L from '../../utils/localization';

import './../Home1.css';

import students from '../../images/home/students.png';
import collegeanduniversities from '../../images/home/collegeanduniversities.png';

const ChangeMaker = () => {
	return (
		<div className='change-maker-background-banner'>
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
			</div>
			<button className='change-maker-button'>{L.t('home.thirdBannerBeAChangeButton')}</button>
		</div>
	);
}

export default ChangeMaker;