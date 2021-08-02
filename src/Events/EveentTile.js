import L from '../utils/localization';

import events_1 from '../images/events/events_1.png';
import events_2 from '../images/events/events_2.png';
import React, { useRef, useState } from "react";
import config from '../config/config';
const appRoute = config.appRoute;

const EveentTile = (props) => {
    const { events } = props;

    return (
        <div className="col-xs-12">
            <div id="divDefine" className="row" style={{
                backgroundColor: '#FAFAFA', marginTop: '10px', paddingTop: '10px',
                paddingBottom: '10px', paddingLeft: '5px'
            }}>
                <div id="divImage" className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                </div>
                <div id="divImage" className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <img src={events_1} alt="event_1" style={{ height: '100%', width: '100%' }} />
                </div>
                <div id="divContent" className="col-xs-12 col-sm-12 col-md-3 col-lg-3 well">
                    <h2 style={{
                        color: '#DF7870', fontSize: '14px', backgroundColor: '#FFF8F8',
                        width: '80px', textAlign: 'center'
                    }}>
                        {events.name}
                    </h2>
                    <h2 style={{ color: '#004578', fontSize: '24px' }}>
                        {events.header}
                    </h2>
                    <h2 style={{ color: '#8B8B8B', fontSize: '14px', textAlign: 'left' }}>
                        {events.description}
                    </h2>
                </div>
                <div id="divCalender" className="col-xs-12 col-sm-12 col-md-3 col-lg-3" style={{ marginLeft: '10px' }}>
                    <div className="row" style={{ textAlign: 'left' }}>
                        <div style={{ width: '50%' }}>
                            <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                                {events.eventDateTeamSizeText}
                            </h2>
                            <h2 style={{ fontSize: '16px', color: '#696969' }}>
                                {events.eventDateTeanSize}
                            </h2>
                        </div>
                        <div style={{ width: '50%' }}>
                            <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                                {events.eventDateRegistrationFeeText}
                            </h2>
                            <h2 style={{ fontSize: '16px', color: '#696969' }}>
                                {events.eventDateRegistrationFee}
                            </h2>
                        </div>
                    </div>

                    <div className="row" style={{ textAlign: 'left' }}>
                        <div style={{ width: '50%' }}>
                            <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                                {events.eventDateDateText}
                            </h2>
                            <h2 style={{ fontSize: '16px', color: '#696969' }}>
                                {events.eventDateDate}
                            </h2>
                        </div>
                        <div style={{ width: '50%' }}>
                            <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                                {events.eventDateTimeText}
                            </h2>
                            <h2 style={{  fontSize: '16px', color: '#696969' }}>
                                {events.eventDateTime}
                            </h2>
                        </div>
                    </div>

                    <div className="row" style={{ textAlign: 'left' }}>
                        <div style={{ width: '100%' }}>
                            <h2 style={{ color: '#AAA7A7', fontSize: '16px' }}>
                                {events.eventDateLocationText}
                            </h2>

                            <h2 style={{  fontSize: '16px', color: '#696969' }}>
                                {events.eventDateLocation}
                            </h2>
                        </div>
                    </div>

                    <div className="" style={{ textAlign: 'center' }}>
                        <button style={{ backgroundColor: '#004578', maxWidth: '278px',
                        height: '53px', width: '100%', color: '#ffffff' }}
                            id="btnContactUs" href={`${appRoute}/contact_us`}>
                            {L.t('events.firstRowButton')}</button>
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                </div>
            </div>
        </div>
    );
};

export default EveentTile;