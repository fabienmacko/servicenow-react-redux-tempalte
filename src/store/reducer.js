/**
 * Initial State
 */
const initialState = {
  incidents: [],

  // Input Controls
  d: "",
  sd: "",
};

/**
 * Types
 */
export const SET_INCIDENTS = 'SET_INCIDENTS';
export const GET_INCIDENTS = 'GET_INCIDENTS';
export const REMOVE_INCIDENT = 'REMOVE_INCIDENT';
export const CONTROL_INPUT = 'CONTROL_INPUT';
export const CREATE_INCIDENT = 'CREATE_INCIDENT';

/**
 * Traitements
 */

/**
 * Reducer
 */
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_INCIDENTS:
      return {
        ...state,
        incidents: action.incidents,
      };
    case REMOVE_INCIDENT:
      return {
        ...state,
        incidents: state.incidents.filter(incident => incident.sys_id !== action.incidentSysId)
      }
    case CONTROL_INPUT:
      return {
        ...state,
        [action.id]: action.value,
      }
    default:
      return state;
  }
};

/**
 * Action Creators
 */
export const getIncidents = () => ({
  type: GET_INCIDENTS,
});
export const setIncidents = incidents => ({
  type: SET_INCIDENTS,
  incidents,
});
export const removeIncident = incidentSysId => ({
  type: REMOVE_INCIDENT,
  incidentSysId,
});
export const controlInput = (id, value) => ({
  type: CONTROL_INPUT,
  id,
  value
});
export const createIncident = () => ({
  type: CREATE_INCIDENT,
});





/**
 * Selectors
 */

/**
 * Export
 */
export default reducer;