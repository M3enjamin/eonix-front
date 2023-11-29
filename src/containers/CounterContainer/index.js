import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { decrementAction, incrementAction } from "../../store/counter/action";
import { makeSelectHomeContainerCounter as makeSelectCounter } from "../../store/counter/selector";
import { useInjectReducer } from "../../utils/injectReducer";

import reducer from "../../store/counter/reducer";
import Counter from "../../views/Counter";

const key = "counterContainer";

function CounterContainer(props) {
  useInjectReducer({ key, reducer });

  return <Counter {...props} />;
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(CounterContainer);
