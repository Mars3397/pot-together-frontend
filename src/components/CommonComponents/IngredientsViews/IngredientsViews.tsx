import SwipeableViews from "react-swipeable-views";
import IngredientsBox, {IngredientsBoxProps} from "./IngredientsBox";
import { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";

interface IngredientsViewsProps {
  views: IngredientsBoxProps[];
};

export const IngredientsViews = (props: IngredientsViewsProps) => {
  const { views } = props;
  const maxSteps = views.length;
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className="ingredients-views">
      <SwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        style={{
          height: "18rem",
          borderRadius: "10px",
          border: `5px solid ${views[activeStep].color}`,
        }}
      >
        {views.map((view, index) => {
          return (
            <IngredientsBox
              color={view.color}
              time={view.time}
              images={view.images}
            />
          );
        })}
      </SwipeableViews>
      <MobileStepper
        variant="dots"
        steps={maxSteps}
        sx={{
          "& .MuiMobileStepper-dot": {
            backgroundColor: "#D1D1D1"
          },
          "& .MuiMobileStepper-dotActive": {
            backgroundColor: "#7D7D2D"
          }
        }}
        position="static"
        activeStep={activeStep}
        nextButton={<div></div>}
        backButton={<div></div>}
      />
    </div>
  );
};

export default IngredientsViews;
