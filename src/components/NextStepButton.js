import React from "react";
import { connect } from "react-redux";
import { myActions } from "../store";

const mapStateToProps = null;
export const PROGRESS_TO_NEXT_STEP = "PROGRESS_TO_NEXT-STEP";

const mapDispatchToProps = dispatch => {
  return {
    onClick: () => {
      dispatch(myActions.progressToNextStep);
    }
  };
};

const NextStepButton = props => {
  return <button onClick={props.onClick}>Step {props.currentStep}</button>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextStepButton);
