import logo from './logo.svg';
import './App.css';
import Video from './components/Video';
import Upload from './components/Upload';
import Transcript from './components/Transcript';
import ListDocs from './components/ListDocs';

import React, { Component } from 'react';

class App extends Component {
state = {
    data: null
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