import { connect } from 'react-redux';
import TracksContainer from './TracksContainer';

const mapStateToProps = (state, ownProps) => ({
  // 只注入需要的
  // state
  trackList: state.tracks.trackList,
  grid: state.tracks.grid,
  store: state.tracks.store
});

const mapDispatchToProps = (dispatch, ownProps) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TracksContainer);
