import React from 'react';
import ReactDOM from 'react-dom';

import Dashboard from './components/Dashboard';


class App extends React.Component {

  render() {
    return (
      <Dashboard>
      </Dashboard>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));
