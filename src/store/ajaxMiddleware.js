import axios from 'axios';

import { setIncidents } from './reducer';

const ajaxMiddleware = store => next => (action) => {
  switch (action.type) {
    case "GET_INCIDENTS":
      axios.get('/api/now/table/incident?sysparm_limit=20')
        .then((response) => {
          store.dispatch(setIncidents(response.data.result));
        })
        .catch((err) => {
          console.log(err);

        });
      break;
    case "CREATE_INCIDENT":
        console.log(window.servicenowUserId);
      axios.post('/api/now/table/incident', {
        short_description: store.getState().sd,
        description: store.getState().d,
        caller_id: window.servicenowUserId,
      })
        .then((response) => {
          console.log(response);
          
        })
        .catch((err) => {
          console.log(err);

        });
      break;
    default:
      return next(action);
  }
};
export default ajaxMiddleware;