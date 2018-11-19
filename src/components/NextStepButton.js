import React from "react";
import { connect } from "react-redux";
import { myActions } from "../store";

const mapStateToProps = state => {
  return {
    stepState: state.stepState,
    currentStep: state.currentStep
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(myActions.progressToNextStep);
    }
  };
};

const NextStepButton = props => {
  console.log(props.stepState);
  let currentStageKey = Object.keys(props.stepState).find(
    key => props.stepState[key].stepNumber === props.currentStep
  );
  let button = null;
  if (props.stepState[currentStageKey].complete) {
    button = <button onClick={props.onClick}>Next Step</button>;
  }

  return button;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextStepButton);
