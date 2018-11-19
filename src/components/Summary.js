import React from "react";
import { connect } from "react-redux";
import "./Summary.scss";
import { Link } from "react-router-dom";
import { myActions } from "../store";

const mapStateToProps = state => {
  return {
    fabric: state.fabric
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reset: () => {
      dispatch(myActions.startOver());
    }
  };
};

const Summary = props => {
  return (
    <div className="summary">
      <p>
        You want a {props.fabric.color} colored {props.fabric.type} bag.
      </p>
      <Link to="/" onClick={props.reset}>
        Start Over
      </Link>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary);
