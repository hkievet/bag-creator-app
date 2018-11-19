import { createStore } from "redux";
import { cssColors } from "./colors";

export const PROGRESS_TO_NEXT_STEP = "PROGRESS_TO_NEXT-STEP";
export const CHOOSE_FABRIC_COLOR = "CHOOSE_FABRIC_COLOR";
export const CHOOSE_FABRIC = "CHOOSE_FABRIC";

export const myActions = {
  progressToNextStep: {
    type: PROGRESS_TO_NEXT_STEP
  },
  chooseFabricColor: hexColor => {
    return {
      type: CHOOSE_FABRIC_COLOR,
      color: hexColor
    };
  },
  chooseFabric: fabric => {
    return {
      type: CHOOSE_FABRIC,
      fabricType: fabric
    };
  }
};

const defaultState = {
  currentStep: 1,
  totalSteps: 3,
  colors: cssColors,
  fabric: {
    type: "",
    color: ""
  },
  stepState: {
    fabricChoice: {
      stepNumber: 1,
      complete: false
    },
    fabricColor: {
      stepNumber: 2,
      complete: false
    },
    sealType: {
      stepNumber: 3,
      complete: false
    }
  }
};

//https://redux.js.org/basics/reducers
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case PROGRESS_TO_NEXT_STEP:
      return Object.assign({}, state, { currentStep: state.currentStep + 1 });
    case CHOOSE_FABRIC_COLOR:
      return Object.assign({}, state, {
        fabric: Object.assign({}, state.fabric, {
          color: action.color
        }),
        stepState: Object.assign({}, state.stepState, {
          fabricColor: Object.assign({}, state.stepState.fabricColor, {
            complete: true
          })
        })
      });
    case CHOOSE_FABRIC:
      return Object.assign({}, state, {
        fabric: Object.assign({}, state.fabric, {
          type: action.fabricType
        }),
        stepState: Object.assign({}, state.stepState, {
          fabricChoice: Object.assign({}, state.stepState.fabricChoice, {
            complete: true
          })
        })
      });
    default:
      return state;
  }
};

export const store = createStore(reducer);
