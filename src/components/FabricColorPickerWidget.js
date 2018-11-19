import React from "react";
import { connect } from "react-redux";
import ImageCoverOverlay from "./ColorFilterImage";
import ColorPicker from "./ColorPicker";

const mapStateToProps = null;

const mapDispatchToProps = null;

const FabricColorPickerWidget = props => {
  return (
    <div>
      <h2>Pick A Fabric Color</h2>
      <ColorPicker />
      <ImageCoverOverlay />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FabricColorPickerWidget);
