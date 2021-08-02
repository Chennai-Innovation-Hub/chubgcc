import React from 'react';
import L from '../utils/localization';
import './Contact.css';
import vector from '../images/common/Vector.png';
import ripponBuildingMap from '../images/contactUs/Ripon_Building_MAP.png';

const ContactUs = () => (
    <div>
        <div id="divContactUs" className="container"
            style={{ width: '100%', maxWidth: '1919px', padding: '0' }}>
            <div className="nopadding" style={{ textAlign: 'center' }}>
                <img src={ripponBuildingMap} style={{ height: '100%', maxHeight: '575px', width: '100%' }} alt="ripponBuildingMap" />
            </div>
        </div>
        <br />
            <div className="col-xs-12">
            <div className="col-xs-12">
                <h2 style={{ textAlign: 'center', fontSize: '45px', color: '#004578' }}>Contact Us</h2>
                <div className="col-xs-12" style={{ textAlign: 'center', marginBottom: '5px' }}>
                    <img src={vector} style={{ width: '72.5px', height: '4px' }} />
                </div>
            </div>
            <div className='contact-us-form' style={{}}>
            <div style={{ marginTop: '25px', textAlign: 'center' }}>
                {/* <input type="text" className="form-control" id="txtName" placeholder="Name" style={{
                    width: '525px',
                    height: '59px', background: '#F7F7F7', borderRadius: '3px'
                }} /> */}
                <h2 style={{ textAlign: 'center', fontSize: '45px', color: '#004578' }}>Chennai Innovation Hub</h2>
            </div>
            <div style={{ marginTop: '25px', textAlign: 'left' }}>
            <h2 style={{ textAlign: 'left', fontSize: '25px', color: '#004578' }}>2nd floor ripon building, </h2>
            <h2 style={{ textAlign: 'left', fontSize: '25px', color: '#004578' }}>No 53, Raja Muthiah Rd, </h2>
            <h2 style={{ textAlign: 'left', fontSize: '25px', color: '#004578' }}>Kannappar Thidal, </h2>
            <h2 style={{ textAlign: 'left', fontSize: '25px', color: '#004578' }}>Periyamet, Chennai, </h2>
            <h2 style={{ textAlign: 'left', fontSize: '25px', color: '#004578' }}>Tamil Nadu 600003 </h2>
            <h2 style={{ textAlign: 'left', fontSize: '25px', color: '#004578' }}>Email: chub.gcc@gmail.com</h2>
            </div>

        </div>
        </div>
    </div>
);

export default ContactUs;
