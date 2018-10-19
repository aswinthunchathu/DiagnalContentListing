/*
This component enables lazy loading for the childrens
specified in it.
*/

import React, { Component } from 'react';
import Loader from '../components/Loader';
import PropTypes from 'prop-types';
import {THRESHOLD} from '../constants';

class LazyLoader extends Component {

  static propTypes = {
    hasMore: PropTypes.bool.isRequired,
    isFetching : PropTypes.bool.isRequired,
    hasError: PropTypes.object,
    loadData : PropTypes.func.isRequired
  }
    
  constructor(props){
    super(props);
    window.onscroll = this.onscroll.bind(this);
  }

  componentDidMount() {
    this.props.loadData();
  }

  /*This function will be triggered for each scroll*/
  onscroll = () => { 
    let {hasMore, isFetching, hasError} = this.props;
    
    if(!hasMore || isFetching || hasError){
      return;
    }

    if (document.documentElement.offsetHeight - window.innerHeight - document.documentElement.scrollTop < THRESHOLD) {
      this.props.loadData();
    }
  }

  render() {
    let {isFetching} = this.props;
    return (
        <>
            {this.props.children}
            {isFetching && (<Loader/>)}
        </>
    )
  }
}

export default LazyLoader;