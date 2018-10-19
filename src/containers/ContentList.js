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
      fetching: PropTypes.bool.isRequired,
      fetched: PropTypes.bool.isRequired,
      hasMore: PropTypes.bool.isRequired,
      data: PropTypes.object.isRequired
    }).isRequired
  }

  renderCard(key, item){
    return (<div className="w-1/3 pl-2 pr-2 pb-8" key={key}>
        <Tile image={`assets/Slices/${item["poster-image"]}`} title={item.name} />
      </div>);
  }

  renderContent() {
    let { contentList: { data, fetched }, filter } = this.props;
    let content = fetched ? data["content-items"].content : [];
    let list = [];

    for(let i = 0; i < content.length; i++){
      if (filter.text !== "") {
        (content[i].name.toLocaleLowerCase()).indexOf(filter.text.toLocaleLowerCase()) !== -1 &&
        list.push(this.renderCard(i, content[i]));
      }else{
        list.push(this.renderCard(i, content[i]));
      }
    }

    return list;
  }

  // renderContent() {
  //   let { contentList: { data, fetched }, filter } = this.props;
  //   let content = fetched ? data["content-items"].content : [];
  //   let list = content;

  //   if (filter.text !== "") {
  //     list = content.filter(item => ((item.name.toLocaleLowerCase()).indexOf(filter.text.toLocaleLowerCase()) !== -1))
  //   }

  //   return list.map((item, index) => (
  //     <div className="w-1/3 pl-2 pr-2 pb-8" key={`${item["poster-image"]}-${index}-${item.name}`}>
  //       <Tile image={`assets/Slices/${item["poster-image"]}`} title={item.name} />
  //     </div>
  //   ));
  // }

  render() {
    let { error, hasMore, fetching, fetched } = this.props.contentList;
    let content = this.renderContent();
    return (
      <div className="container m-auto pl-2 pr-2">
        
        {error && (<Error>{error.maskWith}</Error>)}

        {fetched && content.length === 0 && <div className="text-white text-3xl text-center">No results found.</div>}
        
        <LazyLoader loadData={this.props.fetchContent} hasMore={hasMore}
          isFetching={fetching} hasError={error}>
          <div className="flex flex-wrap">
            {content.length > 0 && content}            
          </div>
        </LazyLoader>

      </div>
    );
  }
}

//map state supplied by redux to props
const mapStateToProps = (state, ownProps) => ({
  contentList: state.contentList.list,
  filter: state.contentList.filter
});

//map thunk actions with props
const mapDispatchToProps = (dispatch) => ({
  fetchContent: (page) => dispatch(fetchContent(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(ContentList);
