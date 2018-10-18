/*
This component renders a tile view 
with a provided image and a text
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import placeHolderImage from '../assets/Slices/placeholder_for_missing_posters.png';

class Tile extends Component {
  
  static propTypes = {
    image: PropTypes.string.isRequired,
    title : PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {
      isImageLoaded : false
    };
  }

  /*This function will set isImageLoaded state to true
  when actual image is loaded*/
  onImageLoad(){
    this.setState({
      isImageLoaded : true
    })
  }

  render() {
    const {image, title} = this.props;
    const {isImageLoaded} = this.state;
    return (
      <div className="flex flex-col justify-between h-full">
        <div className="block">
          {
              /*showing placeholder image initialy*/
            !isImageLoaded && (
              <img src={placeHolderImage} alt={title} className="max-w-full"/>
            )
          }
          <img src={image} alt={title} className={`max-w-full ${!isImageLoaded ? "hidden" : ''}`} onLoad={this.onImageLoad.bind(this)}/>
        </div>
       <p className="pt-2 text-white truncate">{title}</p>
      </div>
    );
  }
}

export default Tile;