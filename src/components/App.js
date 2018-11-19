import React from "react";
import { connect } from "react-redux";

import ProgressBar from "./ProgressBar";
import NextStepButton from "./NextStepButton";

import "./App.scss";
import FabricColorPickerWidget from "./FabricColorPickerWidget";
import FabricPickerWidget from "./FabricPickerWidget";

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
    totalSteps: state.totalSteps
  };
};
const mapDispatchToProps = null;

const App = props => {
  let button;

  const getFormStep = () => {
    if (props.currentStep === 1) {
      return <FabricPickerWidget />;
    } else if (props.currentStep === 2) {
      return <FabricColorPickerWidget />;
    } else {
      return <p>Step not implemented. This app is a work in progress</p>;
    }
  };

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
      <div className="form-step">{getFormStep()}</div>
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
