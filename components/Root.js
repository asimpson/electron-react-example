import React, { Component} from 'react'
import { render } from 'react-dom'
import os from "os";

class Root extends Component {
  componentDidMount() {
    console.log(`The home directory is ${os.homedir()}`);
  }

  render() {
    return (
      <p>👋 React is loaded!</p>
    );
  }
}

render(<Root />, document.querySelectorAll('.app-target')[0]);
