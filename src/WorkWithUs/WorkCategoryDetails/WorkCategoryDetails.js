import React from 'react';
import L from '../../utils/localization';
import parse from 'html-react-parser';

const WorkCategoryDetails = (props) => {
  const content = props.content;

  return (
    <div className='work-category-card'>
      <div className='category-card-header'>
        <img alt='' src={content.image}/>
        <h2>{content.title}</h2>
      </div>
      <div className='category-card-description' style={{textAlign:"justify"}}>{parse(content.description)}</div>
      <div className='category-card-subtitle'>{parse(content.subTitle)}</div>
      {
        content.participants && content.participants.map((participant) => {
          return (
            <div className='category-card-participant'>
              {participant.participantTitle && <div>
                <div className='category-card-participant-header'>
                  <img alt='' src={participant.participantImage}/>
                  <h3>{participant.participantTitle}</h3>
                </div>
              </div>}
              {participant.steps && participant.steps.map((step) => {
                return (
                  <div className='category-card-participant-step'>
                    <img alt='' src={'./images/workWithUs/dot.png'}/>
                    <div>{parse(step)}</div>
                  </div>
                )
              })}
            </div>
          )
        })
      }
      <div className='category-mail-section'>
        <div className='category-mail-content'>{L.t('workWithUs.mailContent')}</div>
        <a className='category-mail-link'>{L.t('workWithUs.mailId')}</a>
      </div>
    </div>
  );
};

export default WorkCategoryDetails;