import React from 'react';
import logo from './logo.svg';
import axios from 'axios'
import GLOBAL from './global';
import './App.scss';

class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      serverResponse: 0
    }
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const res = await axios.get(GLOBAL.forexApi + 'latest');
    const { data } = await res;
    this.setState({ serverResponse: data.rates.USD })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p></p>
          <p>
            <code>
              Today 1 EUR is {this.state.serverResponse} USD
            </code>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;