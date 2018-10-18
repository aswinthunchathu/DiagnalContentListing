/*This component display a CSS based loader*/
import React, { Component } from 'react';

class Loader extends Component {
  render() {
    return (
      <div className="mb-8 text-center">
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
      </div>
    )
  }
}

export default Loader;