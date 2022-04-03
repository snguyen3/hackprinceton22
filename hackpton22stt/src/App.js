import logo from './logo.svg';
import './App.css';
import Video from './components/Video';
import Upload from './components/Upload';
import Transcript from './components/Transcript';


import React, { Component } from 'react';

class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <Video />
        <Upload />
        <Transcript />
    </div>
    );
  }
}

export default App;