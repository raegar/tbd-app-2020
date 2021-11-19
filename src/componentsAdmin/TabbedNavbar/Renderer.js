import React, { useState } from 'react';
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
      <div eventKey="profile" title={<FontAwesomeIcon icon={faBirthdayCake}/>}>
        Graph lines
      </div>
      <div eventKey="contact" title={<FontAwesomeIcon icon={faBirthdayCake}/>} disabled>
        Graph chart
      </div>
    </Tabs>
    </div>
  );
}

export default GraphTabs;