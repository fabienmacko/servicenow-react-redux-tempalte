import { connect } from 'react-redux';

import Incidents from '../components/App/Incidents';

import {removeIncident} from '../store/reducer';

const mapStateToProps = state => ({
  incidents: state.incidents,
});

const mapDispatchToProps = dispatch => ({
  removeIncident: (sysid) => {
    dispatch(removeIncident(sysid));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Incidents);