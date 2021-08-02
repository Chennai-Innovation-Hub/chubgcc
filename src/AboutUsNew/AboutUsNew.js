import React from 'react';
import './AboutUsNew.css';
import L from "../utils/localization";
import parse from "html-react-parser";

import tick from '../images/common/tick.png';

import Commissioner_GaganDeep_Singh from '../images/aboutUs/OurTeam/commissioner_gagandeep_singh.png';
import DC_MS_Prasanth from '../images/aboutUs/OurTeam/dc_ms_prasanth.png';
import CEO_Raj_Cherubal from '../images/aboutUs/OurTeam/ceo_raj_cherubal.png';
import CIO_Azhagu from '../images/aboutUs/OurTeam/cio_Azhagu.png';
import CDA_SenthilKumaran from '../images/aboutUs/OurTeam/cdo_SenthilKumaran.png';

import vector from '../images/common/Vector.png';

const AboutUsNew = () => {
  return (
    <div id='about-us-page'>
      <div className='about-us-section'>
        <div className='left-pane'>Innovate.<br />Sustain.<br />Enable.</div>
        <div className='about-us-break' />
        <div className='right-pane'>
          <h2>{L.t('aboutUs.firstRowHeader')}</h2>
          <div className="hr-line" />
          <p className='about-us-content'>{parse(L.t('aboutUs.firstRowContent'))}</p>
        </div>
      </div>
      <div className='core-functions-section'>
        <h3>{L.t('aboutUs.secondRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className='core-functions-points'>
          {
            L.t('aboutUs.secondRowData') && L.t('aboutUs.secondRowData').map((data) => {
              return (
                <div className='core-functions-point'>
                  <img alt='' src={tick} />
                  <p>{data}</p>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className="col-sm-12" style={{ backgroundColor: '#ffffff', height: '100%', marginTop: '15px', textAlign: 'center' }}>
        <div style={{ textAlign: 'center' }}>
          <h2 id="hThirdRowHeader" style={{ color: '#004578', fontSize: '40px' }}>
            {L.t('aboutUs.thirdRowHeader')}
          </h2>
          <img src={vector} style={{ width: '72.5px', height: '4px;' }} />
        </div>
        <br />

        <div id="divTeamList">
          <div style={{ textAlign: 'center' }}>
            <h2 id="hThirdRowHeader" style={{ color: '#DF7870', fontSize: '32px' }}>
              {L.t('aboutUs.team.leadershipHeader')}
            </h2>
            <br />
          </div>
          <div className="col-sm-12 row" style={{ textAlign: 'center'}}>
            {/* <div className="col-sm-1">
            </div> */}
            {/* <div className="col-sm-12 row" style={{ marginBottom: '30px' }}> */}
              <div className="col-sm-4">
                <img src={Commissioner_GaganDeep_Singh}
                  style={{ width: '180px', height: '175px' }} />
                <h2 style={{ color: '#004578', fontSize: '20px' }}>
                  {L.t('aboutUs.team.commissioner')}
                </h2>
                <h2 style={{ color: '#0078D4', fontSize: '18px' }}>
                  {L.t('aboutUs.team.commDesignation')}
                </h2>
                <p>{L.t('shared.corporationTitle')}</p>
              </div>
              <div className="col-sm-4">
                <img src={DC_MS_Prasanth}
                  style={{ width: '180px', height: '175px' }} />
                  <h2 style={{ color: '#004578', fontSize: '20px' }}>
                  {L.t('aboutUs.team.deptCommissioner')}
                </h2>
                <h2 style={{ color: '#0078D4', fontSize: '18px' }}>
                  {L.t('aboutUs.team.dcDesignation')}
                </h2>
                <p>{L.t('shared.corporationTitle')}</p>
              </div>
              <div className="col-sm-4">
                <img src={CEO_Raj_Cherubal}
                  style={{ width: '180px', height: '175px' }} />
                   <h2 style={{ color: '#004578', fontSize: '20px' }}>
                  {L.t('aboutUs.team.ceo')}
                </h2>
                <h2 style={{ color: '#0078D4', fontSize: '18px' }}>
                  {L.t('aboutUs.team.ceoDesignation')}
                </h2>
                <p>{L.t('shared.corporationTitle')}</p>
              </div>
            </div>
            {/* <div className="col-sm-1">
            </div> */}
          {/* </div> */}
          <br />
          <div style={{ textAlign: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <h2 id="hThirdRowHeader" style={{ color: '#DF7870', fontSize: '32px' }}>
                {L.t('aboutUs.team.coreTeamHeader')}
              </h2>
              <br />
            </div>

            <div className="col-sm-12 row" style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div className="col-sm-2">
              </div>
              <div className="col-sm-8 row">
                <div className="col-sm-2">
                </div>
                <div className="col-sm-4">
                  <img src={CIO_Azhagu}
                    style={{ width: '180px', height: '175px' }} />
                    <h2 style={{ color: '#004578', fontSize: '20px' }}>
                  {L.t('aboutUs.team.cio')}
                </h2>
                <h2 style={{ color: '#0078D4', fontSize: '18px' }}>
                  {L.t('aboutUs.team.cioDesignation')}
                </h2>
                <h2 style={{ color: '#0078D4', fontSize: '18px' }}>
                Chennai Smart City Limited
                </h2>
                <p>{L.t('shared.corporationTitle')}</p>
                </div>
                <div className="col-sm-4">
                  <img src={CDA_SenthilKumaran}
                    style={{ width: '180px', height: '175px' }} />
                     <h2 style={{ color: '#004578', fontSize: '20px' }}>
                  {L.t('aboutUs.team.cdo')}
                </h2>
                <h2 style={{ color: '#0078D4', fontSize: '18px' }}>
                  {L.t('aboutUs.team.cdoDesignation')}
                </h2>
                <h2 style={{ color: '#0078D4', fontSize: '18px' }}>
                Chennai Smart City Limited
                </h2>
                <p>{L.t('shared.corporationTitle')}</p>
                </div>
                <div className="col-sm-2">
                </div>
              </div>
              <div className="col-sm-2">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='about-mission-section'>
        <h3>{L.t('aboutUs.fourthRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className='about-image-points'>
          {
            L.t('aboutUs.fourthRowData') && L.t('aboutUs.fourthRowData').map((data) => {
              return (
                <div className='about-image-point'>
                  <img alt='' src={data.image} />
                  <p>{data.content}</p>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className='about-vision-section'>
        <h3>{L.t('aboutUs.fifthRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className='about-image-points'>
          {
            L.t('aboutUs.fifthRowData') && L.t('aboutUs.fifthRowData').map((data) => {
              return (
                <div className='about-image-point'>
                  <img alt='' src={data.image} />
                  <p>{data.content}</p>
                </div>
              );
            })
          }
        </div>
      </div>
      <div className='about-values-section'>
        <h3>{L.t('aboutUs.sixthRowHeader')}</h3>
        <div className="hr-line-center" />
        <div className="about-value-points">
          {
            L.t('aboutUs.sixthRowData') && L.t('aboutUs.sixthRowData').map((data, index) => {
              return (
                <React.Fragment>
                  <div className='about-value-point'>
                    <img alt='' src={data.image} />
                    <p>{data.content}</p>
                  </div>
                  {index === 2 && <div className='break' />}
                </React.Fragment>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default AboutUsNew;
