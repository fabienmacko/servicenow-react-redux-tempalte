import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      incidents: [],
    };
  }

  componentDidMount() {
    axios.get('/api/now/table/incident?sysparm_limit=3')
    .then(({data}) => {
      
      this.setState({incidents: data.result});

    })
    .catch(function (error) {
      console.log(error);
    })
  }

  render() {
    return (
      <div>
        <h2>Hello, ServiceNowwwww!</h2>
        <h3>Here is a list of the 3 firsts incidents</h3>
        <ul>
          {
            this.state.incidents.map(incident => <li>{incident.number}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default App;