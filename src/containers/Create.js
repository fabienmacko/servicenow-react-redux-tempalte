import { connect } from 'react-redux';

import Create from '../components/App/Create';

import {controlInput, createIncident} from '../store/reducer';

const mapStateToProps = state => ({
  sdValue: state.sd,
  dValue: state.d,
});

const mapDispatchToProps = dispatch => ({
  controlInput: (input, value) => {
    dispatch(controlInput(input, value));
  },

  createIncident: () => {
    dispatch(createIncident());
  }

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Create);