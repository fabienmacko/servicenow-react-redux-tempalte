import { connect } from 'react-redux';

import App from '../components/App';

import {getIncidents} from '../store/reducer';

const mapStateToProps = state => ({
  App: state.App,
});

const mapDispatchToProps = dispatch => ({
  getIncidents: () => {
    dispatch(getIncidents());
  },

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);