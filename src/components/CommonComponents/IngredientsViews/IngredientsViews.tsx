import SwipeableViews from "react-swipeable-views";
import IngredientsBox, {IngredientsBoxProps} from "./IngredientsBox";
import { useState } from "react";
import MobileStepper from "@mui/material/MobileStepper";

// To use this component, you need to pass in an array of IngredientsBoxProps, the example is shown below:
/* 

const views: IngredientsBoxProps[] = [
  {
      color: '#BABEF4',
      time: '30 min',
      images: [Ingredient0, Ingredient1, Ingredient1, Ingredient1]
  },
  {
      color: '#FFCDBE',
      time: '1 hour',
      images: [Ingredient2]
  },
  {
      color: '#D2D000',
      time: '1 hour 30 min',
      images: [Ingredient3, Ingredient4]
  }
];
return (
  <IngredientViews views={views}/>
)
*/

interface IngredientsViewsProps {
  views: IngredientsBoxProps[];
};

export const IngredientsViews = (props: IngredientsViewsProps) => {
  const { views } = props;
  const maxSteps = views.length;
  const [activeStep, setActiveStep] = useState(0);


  return (
    <div className="ingredients-views">
      <SwipeableViews
        index={activeStep}
        onChangeIndex={(step) => setActiveStep(step)}
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
