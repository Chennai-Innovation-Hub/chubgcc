import React from 'react';
import {Tab, Tabs} from "react-bootstrap";
import '../WorkWithUs.css'
import WorkCategoryDetails from "../WorkCategoryDetails";
import Council from "../../Council/Council";
import L from '../../utils/localization';

const WorkTabView = () => {

  return (
    <div>
      <Tabs defaultActiveKey="0" id="uncontrolled-tab-example">
        {
          L.t('workWithUs.categories').map((category, index) => {
            return (
              <Tab eventKey={index} title={category.title}>
                {
                  category.title === 'Council' ? <Council/> :
                    <WorkCategoryDetails content={category}/>
                }

              </Tab>
            )
          })
        }
      </Tabs>
    </div>

  );
};

export default WorkTabView;
