//@flow

import React, {Component} from 'react';
import {render} from 'react-dom';

type Props = {};

let styles = {
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 10,
  },
  item: {
    backgroundColor: 'lightblue',
  },
};

class App extends Component<Props> {
  render() {
    return (
      <div style={styles.wrapper}>
        <div style={styles.item}>Hello</div>
        <div style={styles.item}>World</div>
        <div style={styles.item}>!</div>
      </div>
    );
  }
}

let app = document.getElementById('app');

if (app) {
  render(<App />, app);
}
