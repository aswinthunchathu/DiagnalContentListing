import React, { Component } from 'react';
import ContentList from './containers/ContentList';
import Header from './containers/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <ContentList/>
      </>
    );
  }
}

export default App;
