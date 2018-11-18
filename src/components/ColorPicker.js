import React from "react";
import { connect } from "react-redux";
import { myActions } from "../store";

const mapStateToProps = state => {
  return {
    colors: state.colors,
    selectedColor: state.fabric.color
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onColorSelect: color => {
      dispatch(myActions.chooseFabricColor(color));
    }
  };
};

const ColorPicker = props => {
  const colorElements = Object.keys(props.colors).map(key => (
    <div
      key={key}
      className={
        "color-choice " + (props.selectedColor === key ? "selected" : "")
      }
      onClick={() => {
        props.onColorSelect(props.colors[key]);
      }}
      style={{
        backgroundColor: props.colors[key]
      }}
    />
  ));
  return <div className="colors">{colorElements}</div>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);
