import React from 'react';
import L from '../utils/localization';
import vector from '../images/common/Vector.png';
import lightHouse from '../images/council/council_light_house.png'
import chennaiInnovationHubVerticals from '../images/council/council_Chennai_Innovation_Hub_Verticals.png'
import ellipse from '../images/common/Ellipse.png'
import orangeRectanlge from '../images/council/council_rectangle.png'
import orangeRectanlge_1 from '../images/council/orangeRectanlge_1.png'
import orangeRectanlge_2 from '../images/council/orangeRectanlge_2.png'
import orangeRectanlge_3 from '../images/council/orangeRectanlge_3.png'

const Council = () => (
    <div className="container" id="divCouncil">
        <div className="row">
            {/* First Row Start */}
            <div className="col-sm-12 row" style={{ textAlign: 'left' }}>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <h2 id="hMainHeader" style={{ fontSize: '45px', color: '#004578' }}>{L.t('council.firstRowHeader')}</h2>
                    <div style={{ marginLeft: '10px', marginBottom: '5px' }}>
                        <img src={vector} alt="" style={{ width: '72.5px', height: '4px' }} />
                    </div>
                    <br />
                    <h2 style={{ fontSize: '35px', color: '#DF7870' }}>
                        "{L.t('council.firstRowSubHeader')}"
                </h2>
                    <br />
                    <h2 style={{ fontSize: '16px', color: '#161515', textAlign:'justify' }}>
                        {L.t('council.firstRowDescription')}
                    </h2>
                </div>
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <img src={lightHouse} alt="lightHouse" style={{ width: '377px', height: '315.33px' }} />
                </div>

            </div>
            {/* First Row Stop */}

            {/* Second Row Start */}
            <div className="col-sm-12 row" style={{ textAlign: 'center', marginBottom: '30px' }}>
                <br />
                <br />
                <div className="col-xs-12">
                    <h2 id="hMainHeader" style={{ fontSize: '45px', color: '#004578' }}>{L.t('council.secondRowHeader')}</h2>
                    <div style={{ marginLeft: '10px', marginBottom: '5px' }}>
                        <img src={vector} alt="" style={{ width: '72.5px', height: '4px' }} />
                    </div>
                    <div className="col-xs-12">
                        <img src={chennaiInnovationHubVerticals} alt="chennaiInnovationHubVerticals"
                            style={{ width: '100%', maxHeight: '548.07px', minHeight: '300px' }} />
                    </div>
                </div>
            </div>
            {/* Second Row Stop */}

            {/* Join Advisory Council Start */}
            <div className="col-sm-12 row" style={{ textAlign: 'center', backgroundColor: '#F2FBFF' }}>
                <br />
                <br />
                <div className="col-xs-12 ">
                    <h2 style={{ fontSize: '40px', color: '#004578' }}>{L.t('council.thirdRowHeader')}</h2>
                    <div style={{ marginLeft: '10px', marginBottom: '5px' }}>
                        <img src={vector} alt="" style={{ width: '72.5px', height: '4px' }} />
                    </div>
                    <h2 style={{ fontSize: '16px', color: '#161515' }}>{L.t('council.thirdRowDescription')}</h2>
                    <br />
                    <br />
                    <h2 style={{ fontSize: '16px', color: '#004578' }}>{L.t('council.thirdRowSubHeader')}</h2>
                    <br />
                    <div className="col-sm-12 row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="row" style={{ backgroundColor: '#ffffff', paddingTop: '1rem', marginRight: '1px' }}>
                                <div style={{ width: '5%' }}>
                                    <img src={ellipse} alt="ellipse" style={{ width: '10px', height: '10px' }} />
                                </div>
                                <div style={{ width: '95%', textAlign: 'left' }}>
                                    <h5 style={{ color: '#161515', fontSize: '16px' }}>{L.t('council.thirdRowData[0]')}</h5>
                                </div>
                            </div>
                            <br />
                            <div className="row" style={{ backgroundColor: '#ffffff', paddingTop: '1rem', marginRight: '1px' }}>
                                <div style={{ width: '5%' }}>
                                    <img src={ellipse} alt="ellipse" style={{ width: '10px', height: '10px' }} />
                                </div>
                                <div style={{ width: '95%', textAlign: 'left' }}>
                                    <h5 style={{ color: '#161515', fontSize: '16px' }}>{L.t('council.thirdRowData[2]')}</h5>
                                </div>
                            </div>
                            <br />
                            <div className="row" style={{ backgroundColor: '#ffffff', paddingTop: '1rem', marginRight: '1px' }}>
                                <div style={{ width: '5%' }}>
                                    <img src={ellipse} alt="ellipse" style={{ width: '10px', height: '10px' }} />
                                </div>
                                <div style={{ width: '95%', textAlign: 'left' }}>
                                    <h5 style={{ color: '#161515', fontSize: '16px' }}>{L.t('council.thirdRowData[4]')}</h5>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                            <div className="row" style={{ backgroundColor: '#ffffff', paddingTop: '1rem' }}>
                                <div style={{ width: '5%' }}>
                                    <img src={ellipse} alt="ellipse" style={{ width: '10px', height: '10px' }} />
                                </div>
                                <div style={{ width: '95%', textAlign: 'left' }}>
                                    <h5 style={{ color: '#161515', fontSize: '16px' }}>{L.t('council.thirdRowData[1]')}</h5>
                                </div>
                            </div>
                            <br />
                            <div className="row" style={{ backgroundColor: '#ffffff', paddingTop: '1rem' }}>
                                <div style={{ width: '5%' }}>
                                    <img src={ellipse} alt="ellipse" style={{ width: '10px', height: '10px' }} />
                                </div>
                                <div style={{ width: '95%', textAlign: 'left' }}>
                                    <h5 style={{ color: '#161515', fontSize: '16px' }}>{L.t('council.thirdRowData[3]')}</h5>
                                </div>
                            </div>
                            <br />
                            <div className="row" style={{ backgroundColor: '#ffffff', paddingTop: '1rem' }}>
                                <div style={{ width: '5%' }}>
                                    <img src={ellipse} alt="ellipse" style={{ width: '10px', height: '10px' }} />
                                </div>
                                <div style={{ width: '95%', textAlign: 'left' }}>
                                    <h5 style={{ color: '#161515', fontSize: '16px' }}>{L.t('council.thirdRowData[5]')}</h5>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
                
            </div>
            <br/>
    <br/>
            {/* Join Advisory Council Stop */}

            {/* How To Apply Start */}

            <div className="col-sm-12 row" style={{ textAlign: 'center' }}>
                
                <br />
                <br />
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <h2 style={{ fontSize: '40px', color: '#004578' }}>{L.t('council.thirdRowHeader')}</h2>
                    <div style={{ marginLeft: '10px', marginBottom: '5px' }}>
                        <img src={vector} alt="" style={{ width: '72.5px', height: '4px' }} />
                    </div>
                    <br/>
                    <br/>
                </div>
                <div className="col-xs-12 col-xs-12 col-sm-12 col-md-12 col-lg-12 row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={orangeRectanlge_1} alt="orangeRectanlge" style={{width:'61px', height:'59px'}} />
                        <br/>
                        <br/>
                        <h2 style={{color:'#004578', fontSize: '16px'}}>
                        {L.t('council.fourthRowSubHeader1')}
                        </h2>
                        
                        <h2 style={{color:'#161515', fontSize: '16px', textAlign: 'justify'}}>
                        {L.t('council.fourthRowDescription1')}
                        </h2>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={orangeRectanlge_2} alt="orangeRectanlge" style={{width:'61px', height:'59px'}} />
                        <br/>
                        <br/>
                        <h2 style={{color:'#004578', fontSize: '16px'}}>
                        {L.t('council.fourthRowSubHeader2')}
                        </h2>
                        <h2 style={{color:'#161515', fontSize: '16px', textAlign: 'justify'}}>
                        {L.t('council.fourthRowDescription2')}
                        </h2>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                        <img src={orangeRectanlge_3} alt="orangeRectanlge" style={{width:'61px', height:'59px'}} />
                        <br/>
                        <br/>
                        <h2 style={{color:'#004578', fontSize: '16px'}}>
                        {L.t('council.fourthRowSubHeader3')}
                        </h2>
                        <h2 style={{color:'#161515', fontSize: '16px', textAlign: 'justify'}}>
                        {L.t('council.fourthRowDescription3')}
                        </h2>
                    </div>
                </div>
            </div>


            {/* How To Apply Stop */}
        </div>
    </div>
);
export default Council;