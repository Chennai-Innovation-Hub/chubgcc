import React from 'react';
import L from '../utils/localization';
import vector from '../images/common/Vector.png';
import tick from '../images/common/tick.png';

import chiefInnovationofficer from '../images/aboutUs/about_us_1_chief_innovation_officer.png';
import chiefInnovationofficerTamil from '../images/aboutUs/about_us_1_chief_innovation_officer_tamil.png';

import advisoryCommitteeTamil from '../images/aboutUs/about_us_2_advisory_committee_tamil.png';
import advisoryCommittee from '../images/aboutUs/about_us_2_advisory_committee.png';

import educationalInstitutionsTamil from '../images/aboutUs/about_us_3_educational_institutions_tamil.png';
import educationalInstitutions from '../images/aboutUs/about_us_3_educational_institutions.png';

import theGreaterChennaiCorporationTamil from '../images/aboutUs/about_us_4_the_greater_chennai_corporation_tamil.png';
import theGreaterChennaiCorporation from '../images/aboutUs/about_us_4_the_greater_chennai_corporation.png';

import aboutUsMissionImg1 from '../images/aboutUs/about_us_mission-img1.png';
import aboutUsMissionImg2 from '../images/aboutUs/about_us_mission-img2.png';

import aboutUsVisionImg1 from '../images/aboutUs/about_us_vision-img1.png';
import aboutUsVisionImg2 from '../images/aboutUs/about_us_vision-img2.png';
import aboutUsVisionImg3 from '../images/aboutUs/about_us_vision-img3.png';
import aboutUsVisionImg4 from '../images/aboutUs/about_us_vision-img4.png';

import aboutUs_1_values_Collaboration from '../images/aboutUs/about_us_1_values_Collaboration.png';
import aboutUs_2_values_Fairness from '../images/aboutUs/about_us_2_values_Fairness.png';
import aboutUs_3_values_Learning from '../images/aboutUs/about_us_3_values_Learning.png';
import aboutUs_4_values_Openness from '../images/aboutUs/about_us_4_values_Openness.png';
import aboutUs_5_values_Excellence from '../images/aboutUs/about_us_5_values_Excellence.png';
import aboutUs_6_values_Efficient from '../images/aboutUs/about_us_6_values_Efficient.png';
import aboutUs_7_values_Chanllenge_QUO from '../images/aboutUs/about_us_7_values_Challenge_QUO.png';

import Commissioner_GaganDeep_Singh from '../images/aboutUs/OurTeam/commissioner_gagandeep_singh.png';
import DC_MS_Prasanth from '../images/aboutUs/OurTeam/dc_ms_prasanth.png';
import CEO_Raj_Cherubal from '../images/aboutUs/OurTeam/ceo_raj_cherubal.png';
import CIO_Azhagu from '../images/aboutUs/OurTeam/cio_Azhagu.png';
import CDA_New from '../images/aboutUs/OurTeam/cda_new.png';

const AboutUs = () => (
  <div className="container" id="google_translate_element">
    <div className="row">

      <div className="col-sm-12 englishMainHeader" style={{ textAlign: 'center' }}>
        <h2 id="hMainHeader" style={{ fontSize: '45px', color: '#004578' }}>{L.t('aboutUs.firstRowHeader')}</h2>
        <br />
      </div>

      <div className="col-sm-3 backgroud-about-us-ripon-building" style={{ marginTop: '10px' }}>
        <h2 style={{ color: '#DF7870', fontSize: '40px' }}>
          <p id="pSubHeader_1">{L.t('aboutUs.firstRowSubHeade[0]')}</p>
          <p id="pSubHeader_2">{L.t('aboutUs.firstRowSubHeade[1]')}</p>
          <p id="pSubHeader_3">{L.t('aboutUs.firstRowSubHeade[2]')}</p>
        </h2>
      </div>

      <div className="col-sm-9" style={{ marginBottom: '5px', textAlign: 'left' }}>
        <p id="pfirst_row_paragraph_1" style={{ fontSize: '16px', color: '#004578' }}>
          {L.t('aboutUs.firstRowParagraph[0]')}
        </p>
        <p id="pfirst_row_paragraph_2" style={{ fontSize: '16px', color: '#004578' }}>
          {L.t('aboutUs.firstRowParagraph[1]')}
        </p>
        <p id="pfirst_row_paragraph_3" style={{ fontSize: '16px', color: '#004578' }}>
          {L.t('aboutUs.firstRowParagraph[2]')}
        </p>
      </div>

      {/* Core Functions Start */}
      <div className="col-sm-12" style={{ textAlign: 'center', color: '#004578' }}>
        <h2 id="hSecondRowHeader" alt="Core Functions" style={{ fontSize: '32px' }}>
          {L.t('aboutUs.secondRowHeader')}
        </h2>
        <div style={{ textAlign: 'center', marginBottom: '5px' }}>
          <img src={vector} alt="" style={{ width: '72.5px', height: '4px' }} />
        </div>
        <div className="col-xs-12 row">
          <div className="col-sm-4" style={{ textAlign: 'left', fontSize: '20px' }}>
            <div style={{ width: '10%', height: '50%', float: 'left' }}>
              <img src={tick} style={{ width: '33px', height: '33px' }} />
            </div>
            <div style={{ width: '90%', height: '50%', float: 'right' }}>
              <p id="hSecondRowData0" style={{ color: '#004578', fontSize: '20px' }}>
                {L.t('aboutUs.secondRowData[0]')}
              </p>
            </div>
          </div>
          <div className="col-sm-4" style={{ textAlign: 'left', fontSize: '20px' }}>

            <div style={{ width: '10%', height: '50%', float: 'left' }}>
              <img src={tick} style={{ width: '33px', height: '33px' }} />
            </div>
            <div style={{ width: '90%', height: '50%', float: 'right' }}>
              <p id="hSecondRowData1" style={{ color: '#004578', fontSize: '20px' }}>
                {L.t('aboutUs.secondRowData[1]')}
              </p>
            </div>
          </div>
          <div className="col-sm-4" style={{ textAlign: 'left', fontSize: '20px' }}>
            <div style={{ width: '10%', height: '50%', float: 'left' }}>
              <img src={tick} style={{ width: '33px', height: '33px' }} />
            </div>
            <div style={{ width: '90%', height: '50%', float: 'right' }}>
              <p id="hSecondRowData2" style={{ color: '#004578', fontSize: '20px' }}>
                {L.t('aboutUs.secondRowData[2]')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Core Functions Stop */}

      {/* Team Start */}
      <div className="col-sm-12" style={{ backgroundColor: '#FFF8F8', height: '100%', marginTop: '15px', textAlign: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 id="hThirdRowHeader" style={{ color: '#004578', fontSize: '40px' }}>
            {L.t('aboutUs.thirdRowHeader')}
          </h2>
          <img src={vector} style={{ width: '72.5px', height: '4px;' }} />
        </div>
        <br />


        <div id="divTeamList">
        <div className="col-sm-12 row" style={{ textAlign: 'center' }}>
        <h2 id="hThirdRowHeader" style={{ color: '#004578', fontSize: '40px' }}>
            {L.t('aboutUs.thirdRowHeader')}
          </h2>
          </div>
				<div className="col-sm-12 row" style={{ textAlign: 'center' }}>
					<div className="col-sm-1">
					</div>
					<div className="col-sm-10" style={{ marginBottom: '30px' }}>
						<img src={Commissioner_GaganDeep_Singh} />
						<img src={DC_MS_Prasanth} />
						<img src={CEO_Raj_Cherubal} />
					</div>
					<div className="col-sm-1">
					</div>
				</div>
				<div style={{ textAlign: 'center' }}>
					<div className="col-sm-12 row" style={{ textAlign: 'center', marginBottom: '30px' }}>
						<div className="col-sm-2">
						</div>
						<div className="col-sm-8">
							<img src={CIO_Azhagu}
								style={{ width: '180px', height: '175px' }} />
							<img src={CDA_New}
								style={{ width: '180px', height: '175px' }} />
						
						</div>
						<div className="col-sm-2">
						</div>
					</div>
				</div>
			</div>




      </div>
      {/* Team End */}

      {/* Mission Start */}
      <div className="col-sm-12" style={{ backgroundColor: '#FFFFFF', textAlign: 'center', color: '#004578', height: '100%', marginTop: '15px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 id="hFourthRowHeader" style={{ textAlign: 'center', fontSize: '40px' }}>
            {L.t('aboutUs.fourthRowHeader')}
          </h2>
          <img src={vector} style={{ width: '72.5px', height: '4px;' }} />
        </div>
        <br />
        <div className="col-sm-12 row">
          <div className="col-sm-6 row">
            <div className="col-sm-3" style={{ textAlign: 'center' }}>
              <img src={aboutUsVisionImg1} style={{ width: '56px', height: '54.67px' }} />
            </div>
            <div className="col-sm-9">
              <p id="hFourthRowData0" style={{ fontSize: '16px' }}>
                {L.t('aboutUs.fifthRowData[0]')}
              </p>
            </div>
          </div>
          <div className="col-sm-6 row">
            <div className="col-sm-3" style={{ textAlign: 'center' }}>
              <img src={aboutUsVisionImg2} style={{ width: '56px', height: '54.67px' }} />
            </div>
            <div className="col-sm-9">
              <p id="hFourthRowData1" style={{ fontSize: '16px' }}>
                {L.t('aboutUs.fifthRowData[1]')}
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-12 row">
          <div className="col-sm-6 row">
            <div className="col-sm-3" style={{ textAlign: 'center' }}>
              <img src={aboutUsVisionImg3} style={{ width: '56px', height: '54.67px' }} />
            </div>
            <div className="col-sm-9">
              <p id="hFourthRowData0" style={{ fontSize: '16px' }}>
                {L.t('aboutUs.fifthRowData[2]')}
              </p>
            </div>
          </div>
          <div className="col-sm-6 row">
            <div className="col-sm-3" style={{ textAlign: 'center' }}>
              <img src={aboutUsVisionImg4} style={{ width: '56px', height: '54.67px' }} />
            </div>
            <div className="col-sm-9">
              <p id="hFourthRowData1" style={{ fontSize: '16px' }}>
                {L.t('aboutUs.fifthRowData[3]')}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission End */}

      {/* Vision Start */}
      <div className="col-sm-12" style={{ backgroundColor: '#FFFFFF', color: '#004578', height: '100%', marginTop: '15px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 id="hFifthRowHeader" style={{ textAlign: 'center', fontSize: '40px' }}>
            {L.t('aboutUs.fifthRowHeader')}
          </h2>
          <img src={vector} style={{ width: '72.5px', height: '4px;' }} />
        </div>
        <br />
        <div className="col-sm-12 row">
          <div className="col-sm-6 row">
            <div className="col-sm-3" style={{ textAlign: 'center' }}>
              <img src={aboutUsMissionImg1} style={{ width: '56px', height: '54.67px' }} />
            </div>
            <div className="col-sm-9">
              <p id="hFourthRowData0" style={{ fontSize: '16px' }}>
                {L.t('aboutUs.fourthRowData[0]')}
              </p>
            </div>
          </div>
          <div className="col-sm-6 row">
            <div className="col-sm-3" style={{ textAlign: 'center' }}>
              <img src={aboutUsMissionImg2} style={{ width: '56px', height: '54.67px' }} />
            </div>
            <div className="col-sm-9">
              <p id="hFourthRowData1" style={{ fontSize: '16px' }}>
                {L.t('aboutUs.fourthRowData[1]')}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Vision End */}

      {/* Values Start */}

      <div className="col-sm-12" style={{ backgroundColor: '#FFFFFF', color: '#004578', height: '100%', marginTop: '15px' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 id="hSixthRowHeader" style={{ textAlign: 'center', fontSize: '40px' }}>
            {L.t('aboutUs.sixthRowHeader')}
          </h2>
          <img src={vector} style={{ width: '72.5px', height: '4px;' }} />
        </div>
        <br />
        <div id="divValues">
          <div style={{ textAlign: 'center' }}>
            <div className="col-sm-12 row" style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div className="col-sm-2">
              </div>
              <div className="col-sm-8">
                <img src={aboutUs_1_values_Collaboration}
                  style={{ width: '180px', height: '175px' }} />
                <img src={aboutUs_2_values_Fairness}
                  style={{ width: '180px', height: '175px' }} />
                <img src={aboutUs_3_values_Learning}
                  style={{ width: '180px', height: '175px' }} />
              </div>
              <div className="col-sm-2">
              </div>
            </div>
          </div>
          <div className="col-sm-12 row" style={{ textAlign: 'center' }}>

            <div className="col-sm-1">
            </div>
            <div className="col-sm-10" style={{ marginBottom: '30px' }}>
              <img src={aboutUs_4_values_Openness}
                style={{ width: '180px', height: '175px' }} />
              <img src={aboutUs_5_values_Excellence}
                style={{ width: '180px', height: '175px' }} />
              <img src={aboutUs_6_values_Efficient}
                style={{ width: '180px', height: '175px' }} />
              <img src={aboutUs_7_values_Chanllenge_QUO}
                style={{ width: '180px', height: '175px' }} />
            </div>
            <div className="col-sm-1">
            </div>
          </div>
        </div>
      </div>

      {/* Values End */}

    </div>
  </div>
);
export default AboutUs;
