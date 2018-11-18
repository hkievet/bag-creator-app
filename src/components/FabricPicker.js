import React from "react";
import { connect } from "react-redux";
import ImageCoverOverlay from "./ColorFilterImage";
import ColorPicker from "./ColorPicker";

const mapStateToProps = null;

const mapDispatchToProps = null;

const FabricPicker = props => {
  return (
    <div>
      <ColorPicker />
      <ImageCoverOverlay />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FabricPicker);
