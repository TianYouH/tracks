import { connect } from 'react-redux';
import Counter from './Counter';
import { increaseAction, decrementAction, sayHelloAction } from '@/redux/actions/couter';

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    hello: state.counter.hello
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecrementClick: () => dispatch(decrementAction),
    onSayHello: () => dispatch(sayHelloAction)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
