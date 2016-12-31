import React from 'react';
import ReactDOM from 'react-dom';

import Jumbotron from './components/jumbotron.component.js';
import Navigation from './components/navigation.component.js';
import Container from './components/content.component.js';


class App extends React.Component {

  render() {
    return (
      <div>
        <Navigation/>
        <Jumbotron/>
        <Container/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('wrapper'));