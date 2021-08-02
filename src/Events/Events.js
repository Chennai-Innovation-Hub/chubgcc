import React, {useRef, useState} from "react";
import L from '../utils/localization';
import EveentTile from "./EveentTile";
import vector from '../images/common/Vector.png';
import NewEventTile from "./NewEventTile";

const Events = () => {
  return (
    <div id='events-page'>
      <div id="divEvents" className="container"
           style={{ width: '100%', maxWidth: '1919px', padding: '64px 16px', backgroundColor: '#004578'}}>
        <div className="nopadding" style={{textAlign: 'center'}}>
          <div className="nopadding" style={{height: '120px'}}>
            <h2 style={{fontSize: '45px', color: '#ffffff'}}>{L.t('events.firstRowHeader')}</h2>
            <img src={vector} style={{width: '72.5px', height: '2px'}}/>
          </div>
        </div>
      </div>
      <div style={{padding: "50px 16px", maxWidth: "1100px", margin: "auto"}}>
        {
          L.t('events.firstEventData').map((events) => {
            return <NewEventTile event={events} />
          })
        }
      </div>
    </div>
  );
};

export default Events;