import { connect } from 'react-redux';
import { updateTrackList } from '@/redux/actions/tracks';
import Track from './Track';

const mapStateToProps = (state, ownProps) => ({
  // 只注入需要的
  // state
  grid: state.tracks.grid,
  store: state.tracks.store
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateTrackList: (track) => dispatch(updateTrackList(track))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);
