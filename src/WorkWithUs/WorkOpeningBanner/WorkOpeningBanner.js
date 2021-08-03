import React from 'react';
import '../WorkWithUs.css';
import L from '../../utils/localization';
import WorkWithUsBanner from '../../images/workWithUs/work_main_banner.png';

const WorkOpeningBanner = () => {
  return (
    <div className="background-banners" style={{ backgroundImage: `url(${WorkWithUsBanner})`}}>
      <div className="caption">
        <h1>{L.t('workWithUs.bannerTitle')}</h1>
        <div className="hr-line" />
        <p>{L.t('workWithUs.bannerSubTitle')}</p>
      </div>
    </div>
  );
};

export  default WorkOpeningBanner;
