import React from "react";
import { connect } from "react-redux";

import ProgressBar from "./ProgressBar";
import NextStepButton from "./NextStepButton";

import "./App.scss";
import FabricColorPickerWidget from "./FabricColorPickerWidget";
import FabricPickerWidget from "./FabricPickerWidget";
import { Link } from "react-router-dom";

const mapStateToProps = state => {
  return {
    currentStep: state.currentStep,
    totalSteps: state.totalSteps
  };
};
const mapDispatchToProps = null;

const App = props => {
  const getFormStep = () => {
    if (props.currentStep === 1) {
      return <FabricPickerWidget />;
    } else if (props.currentStep === 2) {
      return <FabricColorPickerWidget />;
    } else {
      return <p>Step not implemented. This app is a work in progress</p>;
    }
  };

  let button;
  if (props.currentStep !== props.totalSteps) {
    button = <NextStepButton />;
  }

  let summaryLink;
  if (props.currentStep === props.totalSteps) {
    summaryLink = <Link to="/summary">View Summary</Link>;
  }

  return (
    <div>
      <ProgressBar
        totalSteps={props.totalSteps}
        currentStep={props.currentStep}
      />
      <div className="form-step">{getFormStep()}</div>
      <div className="button-wrapper">
        {button}
        {summaryLink}
      </div>
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
