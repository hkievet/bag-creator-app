import React from "react";
import { connect } from "react-redux";
import { images } from "../data-structs";
import "./ColorFilterImage.scss";

const mapStateToProps = state => {
  return {
    fabric: state.fabric
  };
};
const mapDispatchToProps = null;

const ColorFilterImage = props => {
  const style = {};

  if (props.fabric.color) {
    style.background = `${props.fabric.color}AA`;
  }

  let image;
  if (props.fabric.type) {
    image = (
      <div>
        <p>Preview:</p>
        <div className="image-holder" style={style}>
          <img
            src={images.fabrics[props.fabric.type.toLowerCase()].src}
            className="image-overlay"
            alt={props.fabric.type}
          />
        </div>
      </div>
    );
  }

  return <div>{image}</div>;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorFilterImage);
