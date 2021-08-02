import React from 'react';
import './Home.css';
import L from '../utils/localization';
import chennaiHub from '../images/home/Chennai Hub.png';
import vector from '../images/common/Vector.png';
import schoolAndUniversirt from '../images/home/schoolsanduniversity.png';
import currentEventImage1 from '../images/home/current_event_image1.png';
import currentEventImage2 from '../images/home/current_event_image2.png';
import currentEventImage3 from '../images/home/current_event_image3.png';
import students from '../images/home/students.png';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const Home = () => (
  <div>

    <div className="col-xs-12 col-sm-12 backgroud-banners1">
    <br/>
    <br/>
      <div className="caption">
        <img src={chennaiHub} alt="" />
      </div>
      <br/>
      <br/>
      <br/>
      <div className="div-home">
        <button className="navbar-navigation-button btn-home"  id="btnWorkWithUsInSIdeBanner" href="./workwithus.html">
        {L.t('home.firstRowBtn')}</button>
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 backgroud-banners2" >
      <br />
      <div className="main-caption2-heading">
        <h1 id="hSecondBannerHeading" className="hSecondBannerHeading" >{L.t('home.secondBannerHeading')}</h1>
        <img src={vector} alt="" className="vectorCSS" ></img>
      </div>
      <div id="divCarausal" className="col-xs-12 col-sm-12 carousal">
        <Splide
				options={ {
					rewind : true,
					perPage: 3,
					perMove: 1,
					gap    : '1rem',
				} }>
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
          </SplideSlide>
        </Splide>
      </div>

      <div id="divCarausalMobile" className="col-xs-12 col-sm-12 carousal divCarausalMobile" style={{display: 'none'}}>
        <Splide
				options={ {
					rewind : true,
					perPage: 1,
					perMove: 1,
					gap    : '1rem',
				} }>
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
          </SplideSlide>
        </Splide>
      </div>
    </div>
    <div className="col-xs-12 col-sm-12 backgroud-banners3">
      <br />
      <div className="main-caption3-heading row">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <h1 id="hThirdBannerHeading" className="hThirdBannerHeading">{L.t('home.thirdBannerHeading')}</h1>
          <img src={vector} alt="" className="vectorCSS" ></img>
        </div>
        <div className="row" style={{ marginTop: '30px' }}>
          <br />
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          </div>
          <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
            <h5 id="hThirdBannerHeadingDescription" style={{
              color: "#161515", fontSize: "16px",
              textAlign: "center"
            }}>{L.t('home.thirdBannerHeadingDescription')}</h5>
          </div>
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
          </div>
        </div>
        <div className="col-xs-12 col-sm-12" style={{ marginTop: '50px', paddingBottom: '10px' }}>
          <h3 id="hThirdBannerSubHeading" style={{ fontSize: '26px', color: '#005A9E', texAlign: 'center' }}>
            {L.t('home.thirdBannerSubHeading')}
          </h3>
        </div>
        <div className="col-xs-12 col-sm-12 row" style={{ textAlign: 'center' }}>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <img style={{ width: '208px', height: '208px' }} src={students} />
          </div>
          <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3">
            <img style={{ width: '208px', height: '208px' }} src={schoolAndUniversirt} />
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          </div>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12" style={{ textAlign: 'center', marginTop: '50px' }}>
          <button id="btnBeaChangeMaker" className="btn" style={{
            textAlign: 'center', width: '341px', height: '66px',
            background: '#004578', borderRadius: '3px', color: '#FFFFFF', fontSize: '22px', marginBottom: '25px'
          }}>
            {L.t('home.thirdBannerBeAChangeButton')}
          </button>
        </div>

      </div>
    </div>
  </div>
);
export default Home;