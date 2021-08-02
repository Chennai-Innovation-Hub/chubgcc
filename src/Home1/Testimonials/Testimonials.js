import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import L from '../../utils/localization';

import quotes_left from '../../images/home/testimonials/quotes_left.png';
import quotes_right from '../../images/home/testimonials/quotes_right.png';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';
import './../Home1.css';

const Testimonials = () => {
	return (
		<div>
			<h2>{L.t('home.testimonials.heading')}</h2>
			<div className="hr-line" />
			<div className="well" style={{ margin: " 0 auto 30px", maxWidth: '1000px' }}>
				<Splide
					options={{
						rewind: true,
						perPage: 1,
						perMove: 1,
						gap: '1rem',
						breakpoints: {
							'1080': {
								perPage: 1
							},
							'740': {
								perPage: 1
							}
						}
					}}>

					{
						L.t('home.testimonials.testimonials') && L.t('home.testimonials.testimonials').map((data, index) => {
							return (
								<SplideSlide>
									<div className='testimonials-slide'>
										<img src={data.image} style={{ width: '114px', height: '114px', marginTop: '-57px' }} alt="Image 1" />
										<div className="testimonial-quote">
											<img src={quotes_left} style={{ width: '20.42px', height: '14.58px' }} alt="Image 1" />
											<h2 style={{
												color: '#004578', fontFamily: 'Sentinel', fontStyle: 'normal', fontWeight: 'bold',
												fontSize: '18px', lineHeight: '30px', paddingTop: '8px'
											}}>
												{data.subHeading}
											</h2>
											<img src={quotes_right} style={{ width: '20.42px', height: '14.58px' }} alt="Image 1" />
										</div>
										<div>
											<p style={{
												fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'normal', fontSize: '14px',
												lineHeight: '25px', textAlign: 'justify', color: '#000000', margin: '0'
											}}>
												{data.description}
											</p>
										</div>
										<div>
											<h2 style={{
												fontFamily: 'Inter', fontStyle: 'normal', fontWeight: 'bold', fontSize: '24px', lineHeight: '30px',
												textAlign: 'center', color: '#004578', paddingTop: '16px'
											}}>
												{data.name}
											</h2>
										</div>
									</div>
								</SplideSlide>
							);
						})
					}
				</Splide>
			</div>
		</div>
	);
}

export default Testimonials;