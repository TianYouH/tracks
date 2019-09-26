import { connect } from 'react-redux';
import { setContext, setGrid, setStore } from '@/redux/actions/tracks';
import GridContainer from './GridContainer';

const mapStateToProps = (state, ownProps) => ({
  // 只注入需要的
  // state
  SelectedBrickClass: state.tracks.SelectedBrickClass
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  setContext: (context) => dispatch(setContext(context)),
  setGrid: (grid) => dispatch(setGrid(grid)),
  setStore: (store) => dispatch(setStore(store))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridContainer);
