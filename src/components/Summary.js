import React from "react";
import { connect } from "react-redux";
import "./Summary.scss";

const mapStateToProps = state => {
  return {
    fabric: state.fabric
  };
};

const mapDispatchToProps = dispatch => {};

const Summary = props => {
  return (
    <div className="summary">
      <p>
        You want a {props.fabric.color} colored {props.fabric.type} bag.
      </p>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
