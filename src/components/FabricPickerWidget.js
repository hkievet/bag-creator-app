/**
 * radio button tutorial: http://react.tips/radio-buttons-in-reactjs/
 */
import React from "react";
import { connect } from "react-redux";
import ImageCoverOverlay from "./ColorFilterImage";
import { myActions } from "../store";

const mapStateToProps = state => {
  return {
    fabric: state.fabric.type
  };
};

const mapDispatchToProps = dispatch => {
  return {
    chooseFabric: fabric => {
      dispatch(myActions.chooseFabric(fabric));
    }
  };
};

const FabricPickerWidget = props => {
  const handleOptionChange = event => {
    props.chooseFabric(event.target.value);
  };
  return (
    <div>
      <h2>Pick A Fabric For Your Bag</h2>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Cotton"
            checked={props.fabric === "Cotton"}
            onChange={handleOptionChange}
          />
          Cotton
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Duckcloth"
            checked={props.fabric === "Duckcloth"}
            onChange={handleOptionChange}
          />
          Duck Cloth
        </label>
      </div>
      <div className="radio">
        <label>
          <input
            type="radio"
            value="Silk"
            checked={props.fabric === "Silk"}
            onChange={handleOptionChange}
          />
          Silk
        </label>
      </div>
      <ImageCoverOverlay />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FabricPickerWidget);
