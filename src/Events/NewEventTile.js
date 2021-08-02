import React from "react";
import './Events.css';
import L from '../utils/localization';

const NewEventTile = ({event}) => {
  return (
    <div id='event-tile'>

      <img src={event.image} style={{marginTop:'30px'}} />
      <div className='event-content'>
        <div>{event.name}</div>
        <h2>{event.header}</h2>
        <p style={{textAlign:'justify'}}>{event.description}</p>
      </div>
      <div className='event-details'>
        <div className='event-detail-row'>
          <div className='event-detail-content'>
            <div className='event-detail-heading'>Team Size</div>
            <div className='event-detail-data'>{event.eventDateTeanSize}</div>
          </div>
          <div className='event-detail-content'>
            <div className='event-detail-heading'>Registration Fee</div>
            <div className='event-detail-data'>{event.eventDateRegistrationFee}</div>
          </div>
        </div>
        <div className='event-detail-row'>
          <div className='event-detail-content'>
            <div className='event-detail-heading'>Date</div>
            <div className='event-detail-data'>{event.eventDateDate}</div>
          </div>
          <div className='event-detail-content'>
            <div className='event-detail-heading'>Time</div>
            <div className='event-detail-data'>{event.eventDateTime}</div>
          </div>
        </div>
        <div className='event-detail-location'>
          <div className='event-detail-heading'>Location</div>
          <div className='event-detail-data'>{event.eventDateLocation}</div>
        </div>
        <button>{L.t('shared.comingSoon')}</button>
      </div>
    </div>
  );
};

export default NewEventTile;
