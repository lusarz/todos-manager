import React from 'react';
import ReactDOM from 'react-dom';

import ContainerExampleText from './components/DimmerExampleDimmer';


class App extends React.Component {

  render() {
    return (
      <ContainerExampleText>
      </ContainerExampleText>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('wrapper'));
