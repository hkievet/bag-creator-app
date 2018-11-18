import { createStore } from "redux";
import { cssColors } from "./colors";

export const PROGRESS_TO_NEXT_STEP = "PROGRESS_TO_NEXT-STEP";
export const myActions = {
  progressToNextStep: {
    type: PROGRESS_TO_NEXT_STEP
  }
};

const defaultState = {
  currentStep: 1,
  totalSteps: 5,
  colors: cssColors,
  fabric: {
    type: "",
    color: ""
  }
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case PROGRESS_TO_NEXT_STEP:
      return Object.assign({}, state, { currentStep: state.currentStep + 1 });
    default:
      return state;
  }
};

export const store = createStore(reducer);
