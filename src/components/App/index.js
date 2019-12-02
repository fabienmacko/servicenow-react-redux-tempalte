import React from 'react';
import Incidents from '../../containers/Incidents';
import Create from '../../containers/Create';
import {Switch, Route, Link} from 'react-router-dom';
import './app.scss';

class App extends React.Component {

  componentDidMount() {
    this.props.getIncidents();
  }

  render() {
    return (
      <div id="app">
  <h1>Hello Servicenoooow</h1>
        <Link to="/react_app_incident.do/create"><button>Create new incident</button></Link>
        <Link to="/react_app_incident.do"><button>List of incidents</button></Link>
        <Switch>
          <Route exact path="/react_app_incident.do">
            <Incidents/>
          </Route>

          <Route exact path="/react_app_incident.do/create">
            <Create />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;