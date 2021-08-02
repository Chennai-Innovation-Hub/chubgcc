import React from 'react';
import L from '../utils/localization';
import vector from '../images/common/Vector.png';
import projectImage1 from '../images/projects/projects_card1.png';
import projectImage2 from '../images/projects/projects_card2.png';

const Projects = () => (
    <div>
        <div className="container" style={{ marginTop: '20px', width: '100%', maxWidth: '1919px', padding: '0' }}>
            <div className="nopadding" style={{ textAlign: 'center' }}>
                <div className="nopadding" style={{ backgroundColor: '#004578', height: '200px' }}>
                    <h2 style={{ fontSize: '45px', color: '#ffffff' }}>{L.t('projects.firstRowHeaders')}</h2>
                    <img src={vector} style={{ width: '72.5px', height: '2px' }} />
                    <div className="col-sm-12 row">
                        <div className="col-sm-4 row">
                        </div>
                        <div className="col-sm-5 row" style={{ marginleft: '40px' }}>
                            <h2 style={{ color: '#D2D2D2', fontSize: '16px', textAlign: 'center' }}>
                                {L.t('projects.firstRowDescription')}
                            </h2>
                        </div>
                        <div className="col-sm-3 row">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-sm-12 row" style={{ height: '500px' }}>
            <div className="col-sm-3">
            </div>
            <div className="col-sm-3">
                <img src={projectImage2} style={{ width: '100%'}} />
            </div>
            <div className="col-sm-3">
                <img src={projectImage1} style={{ width: '100%'}} />
            </div>
            <div className="col-sm-3">
            </div>
        </div>
        <div className="col-xs-12 col-sm-12 row" style={{height: '260px', backgroundColor: 'rgba(223, 120, 112, 0.05)'}}>
                <div className="col-xs-12 col-sm-12 col-md-1 col-lg-1 row">
                </div>
                <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3" style={{marginTop: '25px'}}>
                    <p style={{color: '#DF7870', fontSize: '32px'}}>{L.t('projects.thirdRowHeader')}
                    </p>
                    <div>
                        <button type="button" className="btn btnworkwithus-cs" style={{backgroundColor: '#BB6059',
                            color: '#ffffff'}} id="btnworkwithus"
                            onclick="window.location.href='./workwithus.html'">{L.t('projects.thirdRowButton')}</button>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
                </div>
            </div>
    </div>
);
export default Projects;
