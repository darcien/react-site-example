//@flow

import React, {Component} from 'react';
import {render} from 'react-dom';

type Props = {};

class App extends Component<Props> {
  render() {
    return <div>Hello world!</div>;
  }
}

let app = document.getElementById('app');

if (app) {
  render(<App />, app);
}
