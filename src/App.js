import React from 'react';
import { Router } from 'sillyrouter';
import { Store } from 'sillystore';

class App extends React.PureComponent {
  render() {
    return (
      <Store initial={this.props.store}>
        <Router routes={this.props.routes}/>
      </Store>
    );
  }
}

export default App;
