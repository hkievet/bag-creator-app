import { createStore } from "redux";
import { cssColors } from "./colors";

export const PROGRESS_TO_NEXT_STEP = "PROGRESS_TO_NEXT-STEP";
export const CHOOSE_FABRIC_COLOR = "CHOOSE_FABRIC_COLOR";

export const myActions = {
  progressToNextStep: {
    type: PROGRESS_TO_NEXT_STEP
  },
  chooseFabricColor: hexColor => {
    return {
      type: CHOOSE_FABRIC_COLOR,
      color: hexColor
    };
  }
};

const defaultState = {
  currentStep: 1,
  totalSteps: 5,
  colors: cssColors,
  fabric: {
    type: "Cotton",
    color: ""
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case PROGRESS_TO_NEXT_STEP:
      return Object.assign({}, state, { currentStep: state.currentStep + 1 });
    case CHOOSE_FABRIC_COLOR:
      return Object.assign({}, state, {
        fabric: Object.assign({}, state.fabric, {
          color: action.color
        })
      });
    default:
      return state;
  }
};

export const store = createStore(reducer);
