import React from 'react';
import L from '../utils/localization';
import vector from '../images/common/Vector.png';
import tick from '../images/common/tick.png';

const PrivacyPolicy = () => (
    <div>
        <div className="container" style={{ width: '100%', maxWidth: '1919px', padding: '0' }}>
            <div className="nopadding" style={{ textAlign: 'center' }}>
                <div className="nopadding" style={{ backgroundColor: '#004578', height: '200px' }}>
                    <h2 style={{ fontSize: '45px', color: '#ffffff' }}>Privacy Policy</h2>
                    <img src={vector} style={{ width: '72.5px', height: '2px' }} />
                </div>
            </div>
        </div>
        <br />
        <div className="col-sm-12 row" style={{ height: '500px' }}>
            <div className="col-sm-2">
            </div>
            <div className="col-sm-8">
                <h2 style={{ color: '#004578', fontSize: '16px', textAlign: 'left', lineBreak: '2rem' }}>
                <img alt='' style={{width:'20px'}} src={tick} />{L.t('privacyPolicy[0]')}
                <br/>
                <p></p>
                <p></p>
                <img alt='' style={{width:'20px'}} src={tick} />{L.t('privacyPolicy[1]')}
                </h2>
            </div>
            <div className="col-sm-2">
            </div>
        </div>
    </div>
);
export default PrivacyPolicy;