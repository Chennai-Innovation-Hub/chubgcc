import React from "react";
import './FaqOpeningBanner.css';
import BackgroundBanners from '../../images/faq_main_banner.png';

const FaqOpeningBanner = () => {
  return (
    <div className="background-banners" style={{ backgroundImage: `url(${BackgroundBanners})`}}>
      <div className="caption">
        <h1>Frequently Asked Questions</h1>
        <div className="hr-line" />
      </div>
    </div>
  );
};

export default FaqOpeningBanner;
