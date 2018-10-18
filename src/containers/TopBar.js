import { connect } from 'react-redux';
import SerachBar from '../components/SerachBar';

//map state supplied by redux to props
const mapStateToProps = (state, ownProps) => ({
  heading: state.contentList.list.data.title,
});

export default connect(mapStateToProps)(SerachBar);