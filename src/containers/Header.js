import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBox from '../components/SearchBox';
import { onSearch } from '../actions/contentList';
import imgSearch from '../assets/Slices/search.png';
import imgBack from '../assets/Slices/Back.png';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            toggleSearch : false
        }
    }

    toggleSerachBox(){
        this.setState({
            toggleSearch : !this.state.toggleSearch
        })
    }

    handleClear() {
        this.props.onSearch("");
        this.toggleSerachBox();
    }

    render() {
        return (
            <div className="container m-auto search-bar">

                <ReactCSSTransitionGroup
                    transitionName="fade"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={300}>
                    {this.state.toggleSearch && (
                        <SearchBox text={this.props.filter.text}
                        onClear={this.handleClear.bind(this)}
                        handleSearch={(event) => this.props.onSearch(event.currentTarget.value)}></SearchBox>
                    )}
                </ReactCSSTransitionGroup>
                
                <div className="flex">
                    <button title="Search" type="button" className="pr-2 outline-none">
                        <img className="w-8" src={imgBack} alt="Search" />
                    </button>
                    <div className="text-white text-3xl flex-grow pl-3 truncate">
                        {this.props.heading}
                    </div>
                    <button title="Search" type="button" className="pl-2 outline-none" onClick={this.toggleSerachBox.bind(this)}>
                        <img className="w-8" src={imgSearch} alt="Search" />
                    </button>
                </div>
            </div>
        )
    }
}

//map state supplied by redux to props
const mapStateToProps = (state, ownProps) => ({
    heading: state.contentList.list.data.title,
    filter: state.contentList.filter
});

//map thunk actions with props
const mapDispatchToProps = (dispatch) => ({
    onSearch: (text) => dispatch(onSearch(text))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);