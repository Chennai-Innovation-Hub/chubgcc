import React from 'react';
import L from "../utils/localization";
import './ProjectsNew.css';
import {Tab, Tabs} from "react-bootstrap";

const ProjectsNew = () => {
  return (
    <div id='projects-page'>
      <div className='projects-page-header'>
        <h2>{L.t('projects.firstRowHeaders')}</h2>
        <div className="hr-line-center" />
        <p>{L.t('projects.firstRowDescription')}</p>
      </div>
      <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
        <Tab eventKey={0} title={'Completed'}>
         
        <div className="col-sm-12 row" style={{marginTop: '10px'}}>
          {
            L.t('projects.secondRowContent') && L.t('projects.secondRowContent.completed').map((data) => {
              return (
               
                  <div className="col-sm-4">
                  <img alt='' style={{width:'50%'}} src={data.image}/>
                  <h6>{data.host}</h6>
                  <h6>{data.title}</h6>
                  <br/>
                  <br/>
                  </div>
               
              )
            })
          }
           </div>
        </Tab>
        <Tab eventKey={1} title={'Ongoing'}>
        <div className="col-sm-12 row" style={{marginTop: '10px'}}>
          {
            L.t('projects.secondRowContent') && L.t('projects.secondRowContent.ongoing').map((data) => {
              return (
                <div className="col-sm-4">
                  <img alt='' style={{width:'50%'}} src={data.image}/>
                  <h6>{data.host}</h6>
                  <h6>{data.title}</h6>
                </div>
              )
            })
          }
          </div>
        </Tab>
      </Tabs>
      <div className='projects-collaborate-section'>
        <div className='projects-collaborate-content'>
          <h3>{L.t('projects.thirdRowHeader')}</h3>
          <button>{L.t('projects.thirdRowButton')}</button>
        </div>
      </div>
    </div>
  )
};

export default ProjectsNew;
