import React from "react";
import { connect } from "react-redux";
import "./ProgressBar.scss";

const mapStateToProps = state => {
  return {
    totalSteps: state.totalSteps,
    currentStep: state.currentStep
  };
};

const mapDispatchToProps = null;

const ProgressBar = ({ totalSteps, currentStep }) => {
  function calculateProgressWidth() {
    const percentage = Math.floor((currentStep / totalSteps) * 100) + "%";
    return percentage;
  }

  const style = {
    width: calculateProgressWidth()
  };

  return (
    <div className="progressBar">
      <div className="progress-text">
        {currentStep} / {totalSteps}
      </div>
      <div
        className={"progress " + (totalSteps === currentStep ? "complete" : "")}
        style={style}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProgressBar);
