import React from 'react';
import Output from '../containers/Output'

export default class App extends React.Component {
  render() {
    return (
      <div id="content">
        <h2>Mega Tags!</h2>
        <Output />
      </div>
    );
  }
}
