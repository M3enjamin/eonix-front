import React from "react";
import { compose } from "redux";

import CounterContainer from "../CounterContainer";

function HomeContainer() {
  return <CounterContainer />;
}

export default compose(HomeContainer);
