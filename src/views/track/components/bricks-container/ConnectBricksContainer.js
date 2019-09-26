import { connect } from 'react-redux';
import { setSelectedBrickClass } from '@/redux/actions/tracks';
import BricksContainer from './BricksContainer';

const mapStateToProps = (state, ownProps) => ({
  // 只注入需要的
  // state
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSelectedBrickClass: (clas) => dispatch(setSelectedBrickClass(clas))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BricksContainer);
