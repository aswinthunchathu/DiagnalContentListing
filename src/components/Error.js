/*
This component renders an error message
*/

import React, { Component } from 'react';

class Error extends Component {
  render() {
    return (
        <div className="text-red text-4xl text-center">{this.props.children}</div>
    );
  }
}

export default Error;
