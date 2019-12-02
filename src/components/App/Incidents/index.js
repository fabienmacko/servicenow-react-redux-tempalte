import React from 'react';
import './incidents.css';

const Incidents = ({ removeIncident, incidents }) => {

  const handleRemoveClick = (e) => {
    removeIncident(e.target.id);
  }
  return (
    <div id="incidents">
      <h3>Here is a list of the 3 firsts incidents</h3>
      <ul>
        {
          incidents.map((incident, index) => <li key={"incident" + index} id={"incident" + index}>{incident.short_description} <button id={incident.sys_id} onClick={handleRemoveClick}>Remove</button></li>)
        }
      </ul>
    </div>
  )
}

export default Incidents;