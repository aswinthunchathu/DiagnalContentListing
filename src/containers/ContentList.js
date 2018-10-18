import React, { Component } from 'react';
import { connect } from 'react-redux';

import LazyLoader from '../components/LazyLoader';
import Tile from '../components/Tile.js';
import Error from '../components/Error';
import PropTypes from 'prop-types';
import { fetchContent } from '../actions/contentList';

class ContentList extends Component {

    
  static propTypes = {
    contentList: PropTypes.shape({
      fetching : PropTypes.bool.isRequired,
      fetched : PropTypes.bool.isRequired,
      hasMore : PropTypes.bool.isRequired,
      data : PropTypes.object.isRequired
    }).isRequired
  }

  render() {
    let { fetched, data, error, hasMore, fetching } = this.props.contentList;
    let { content } = fetched ? data["content-items"] : [];

    return (
      <div className="container m-auto pl-2 pr-2">
        {
          error && (<Error>{error.maskWith}</Error>)
        }
        <LazyLoader
        loadData={this.props.fetchContent}
        hasMore={hasMore}
        isFetching={fetching}
        hasError={error}>
          <div className="flex flex-wrap">
            {
              content && content.map((item, index) => (
                <div className="w-1/3 pl-2 pr-2 pb-8" key={index}>
                  <Tile image={`assets/Slices/${item["poster-image"]}`} title={item.name} />
                </div>
              ))
            }
          </div>
        </LazyLoader>
      </div>
    );
  }
}

//map state supplied by redux to props
const mapStateToProps = (state, ownProps) => ({
  contentList: state.contentList.list,
});

//map thunk actions with props
const mapDispatchToProps = (dispatch) => ({
  fetchContent: (page) => dispatch(fetchContent(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
