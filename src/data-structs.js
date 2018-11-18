import Cotton from "./assets/cotton.jpeg";
import { cssColors } from "./colors";

export const images = {
  fabrics: {
    cotton: {
      name: "Cotton",
      src: Cotton
    }
  }
};

export const stateObject = {
  currentStep: 1,
  totalSteps: 5,
  colors: cssColors,
  fabric: {
    type: "",
    color: ""
  }
};
