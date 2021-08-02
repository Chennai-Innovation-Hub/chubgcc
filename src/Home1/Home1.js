import React from 'react';
import CurrentEvents from './CurrentEvents/CurrentEvents';
import HomeOpeningBanner from "./HomeOpeningBanner";
import ChangeMaker from './ChangeMaker';
import Partners from './Partners';
import Testimonials from './Testimonials';

const Home1 = () => {
  return (
    <div id='HomePage'>
      <HomeOpeningBanner />
      <CurrentEvents />
      <ChangeMaker />
      <Partners />
      <Testimonials/>
    </div>
  );
}

export default Home1;