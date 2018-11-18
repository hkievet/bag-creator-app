import React from "react";
import { connect } from "react-redux";

import ProgressBar from "./ProgressBar";
import NextStepButton from "./NextStepButton";

import "./App.scss";

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
    totalSteps: state.totalSteps
  };
};
const mapDispatchToProps = null;

const App = props => {
  let button;
  if (props.currentStep !== props.totalSteps) {
    button = <NextStepButton />;
  }

  return (
    <div id="bag-creator">
      <h1>Bag Creator</h1>
      <ProgressBar
        totalSteps={props.totalSteps}
        currentStep={props.currentStep}
      />
      <div className="button-wrapper">{button}</div>
    </div>
  );
};

/*
      <div className="form-step">
        <FabricPicker
          colors={props.colors}
          onFabricUpdate={onFabricUpdate}
          fabric={props.fabric}
        />
      </div>
*/

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
