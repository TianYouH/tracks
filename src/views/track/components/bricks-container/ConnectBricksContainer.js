import { connect } from 'react-redux';
import { setSelectedBrickClass } from '@/redux/actions/tracks';
import BricksContainer from './BricksContainer';

const mapDispatchToProps = (dispatch, ownProps) => ({
  setSelectedBrickClass: (clas) => dispatch(setSelectedBrickClass(clas))
});

export default connect(
  mapDispatchToProps
)(BricksContainer);
