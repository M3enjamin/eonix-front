import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { useInjectReducer } from "../../utils/injectReducer";
import Home from "../../views/Home";
import { decrementAction, incrementAction } from "../../store/counter/action";
import { makeSelectHomeContainerCounter } from "../../store/counter/selector";

import reducer from "../../store/counter/reducer";

const key = "homeContainer";

function HomeContainer(props) {
  useInjectReducer({ key, reducer });

  return <Home {...props} />;
}

const mapStateToProps = createStructuredSelector({
  counter: makeSelectHomeContainerCounter(),
});

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onIncrement: () => dispatch(incrementAction()),
    onDecrement: () => dispatch(decrementAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(HomeContainer);
