/*
This component renders back button, serach button and page title
*/

import React, { Component } from 'react';

import imgSearch from '../assets/Slices/search.png';
import imgBack from '../assets/Slices/Back.png'

class SerachBar extends Component {
    render() {
        return (
            <div className="container m-auto search-bar w-100">
                <div className="flex">
                    <button title="Search" type="button" className="pr-2 outline-none">
                        <img className="w-8" src={imgBack} alt="Search" />
                    </button>
                    <div className="text-white text-3xl flex-grow pl-3 truncate">
                        {this.props.heading}
                    </div>
                    {/* <input type="text" placeholder="Search" className="input-search flex-grow"/> */}
                    <button title="Search" type="button" className="pl-2 outline-none">
                        <img className="w-8" src={imgSearch} alt="Search" />
                    </button>
                </div>
            </div>
        );
    }
}

export default SerachBar;