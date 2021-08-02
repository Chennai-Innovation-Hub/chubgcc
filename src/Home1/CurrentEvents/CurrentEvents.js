import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import L from '../../utils/localization';

import currentEventImage1 from '../../images/home/current_event_image1.png';
import currentEventImage2 from '../../images/home/current_event_image2.png';
import currentEventImage3 from '../../images/home/current_event_image3.png';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './../Home1.css';

const CurrentEvents = () => {
	return (
		<div className='events-background-banner'>
			  <h2>{L.t('home.secondBannerHeading')}</h2>
        <div className="hr-line" />
				<div className="home-events-slider">
					<Splide
					options={{
						rewind : true,
						perPage: 1,
						perMove: 1,
						gap    : '1rem',
						breakpoints: {
							'1080': {
								perPage: 1
							},
							'740': {
								perPage: 1
							}
						}
					}}>
						<SplideSlide>
							<img src={currentEventImage1} className="carousal-img-css" alt="Image 1"/>
						</SplideSlide>
						{/* <SplideSlide>
							<img src={currentEventImage2} className="carousal-img-css" alt="Image 2" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage3} className="carousal-img-css" alt="Image 2" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage1} className="carousal-img-css" alt="Image 1" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage2} className="carousal-img-css" alt="Image 2" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage3} className="carousal-img-css" alt="Image 2" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage1} className="carousal-img-css" alt="Image 1"/>
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage2} className="carousal-img-css" alt="Image 2" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage3} className="carousal-img-css" alt="Image 2" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage1} className="carousal-img-css" alt="Image 1" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage2} className="carousal-img-css" alt="Image 2" />
						</SplideSlide>
						<SplideSlide>
							<img src={currentEventImage3} className="carousal-img-css" alt="Image 2" />
						</SplideSlide> */}
					</Splide>
				</div>
		</div>
	);
}

export default CurrentEvents;