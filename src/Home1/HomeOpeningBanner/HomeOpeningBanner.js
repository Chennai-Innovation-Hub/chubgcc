import React from 'react';
import '../Home1.css';
import L from '../../utils/localization';
import chennaiHub from '../../images/home/Chennai Hub.png';
import config from "../../config/config.json";

const appRoute = config.appRoute;

const HomeOpeningBanner = () => {

  const buttonClick = () => {
    window.location.href = `${appRoute}/workWithUs`;
  }

  return (
    <div className="home-background-banners">
      <div className="center-section">
        <img src={chennaiHub} className='banner-innovate-image' alt="" />
        <button className="banner-btn-home" onClick={() => buttonClick()}>{L.t('home.firstRowBtn')}</button>
      </div>
    </div>
  );
};

export  default HomeOpeningBanner;
