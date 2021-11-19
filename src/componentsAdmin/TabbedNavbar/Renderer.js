import React, { useState } from 'react';
import Tab from './Tab';
import {Tabs} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBirthdayCake} from '@fortawesome/free-solid-svg-icons';

function GraphTabs(){
  const [key, setKey] = useState('home');
  
  return(
    <div>
      <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
      <div eventKey="home" title={<FontAwesomeIcon icon={faBirthdayCake}/>}>
        Graph pie
      </div>
      <Tab eventKey="profile" title={<FontAwesomeIcon icon={faBirthdayCake}/>}>
        Graph lines
      </Tab>
      <Tab eventKey="contact" title={<FontAwesomeIcon icon={faBirthdayCake}/>} disabled>
        Graph chart
      </Tab>
    </Tabs>
    </div>
  );
}

export default GraphTabs;