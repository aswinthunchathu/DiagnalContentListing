/*
This component renders a search bar
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBox extends Component {

    static propTypes = {
        handleSearch : PropTypes.func.isRequired,
        text : PropTypes.string.isRequired,
        onClear : PropTypes.func.isRequired,
    }

    render() {
        return (
            <div className="relative">
                <input type="text" onChange={this.props.handleSearch}
                    value={this.props.text ? this.props.text : ""} placeholder="Search"
                    className="input-search w-full block" />
                <button type="button" className="search-close close-icon" onClick={this.props.onClear}>
                    <span></span>
                    <span></span>
                </button>
            </div>
        );
    }
}

export default SearchBox;