import { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../redux/counter/actions";
import {
  increment as dynamicIncrement,
  decrement as dynamicDecrement,
} from "../redux/dynamicCounter/actions";

function VariableCoutner({ counts, increment, decrement }) {
  return (
    <div className="max-w-md mx-auto mt-10 space-y-5">
      <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
        <div className="text-2xl font-semibold">{counts}</div>
        <div className="flex space-x-3">
          <button
            onClick={increment}
            className="bg-indigo-400 text-white px-3 py-2 rounded shadow"
          >
            Increment
          </button>
          <button
            onClick={decrement}
            className="bg-red-400 text-white px-3 py-2 rounded shadow"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    counts: ownProps.dynamic ? state.dynamicCounter.value : state.counter.value,
  };
};

const mapDispatchProps = (dispatch, ownProps) => {
  return {
    increment: ownProps.dynamic
      ? () => dispatch(dynamicIncrement(5))
      : (value) => dispatch(increment(value)),
    decrement: ownProps.dynamic
      ? () => dispatch(dynamicDecrement(5))
      : (value) => dispatch(decrement(value)),
  };
};

export default connect(mapStateToProps, mapDispatchProps)(VariableCoutner);
