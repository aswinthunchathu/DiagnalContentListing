import React, { Component } from 'react';
import './App.css';

import ContentList from './containers/ContentList';
import TopBar from './containers/TopBar';

class App extends Component {
  render() {
    return (
      <div>
        <TopBar></TopBar>
        <ContentList></ContentList>
      </div>
    );
  }
}

export default App;
