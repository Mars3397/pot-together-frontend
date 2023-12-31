import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import "./AnalysisPage.css";

interface IngredientListProps {
  title: string;
  borderColor: string;
  ingredients: Array<{
    name: string;
    count: number;
    icon: string;
  }>;
}

export const IngredientList = (props: IngredientListProps) => {
  const { title, ingredients, borderColor } = props;

  const renderIngredient = (icon: string, count: number) => {
    const divs = [];
    for (let i = 0; i < count; i++) {
      divs.push(
        <div className="ingredient-list-item">
          <img src={icon}></img>
        </div>
      );
    }
    return divs;
  };

  return (
    <div className="ingredient-list">
      <div className="ingredient-list-title">
        <span>{title}</span>
      </div>
      <div
        className="ingredient-list-content"
        style={{ border: `${borderColor} 0.2rem solid` }}
      >
        <div className="ingredient-list-summary-container">
          {ingredients.map((ingredient) => (
            <div className="ingredient-list-summary-text">
              {ingredient.name} x {ingredient.count}
            </div>
          ))}
        </div>
        <div className="ingredient-list-item-container">
          {ingredients.map((ingredient) =>
            renderIngredient(ingredient.icon, ingredient.count)
          )}
        </div>
      </div>
    </div>
  );
};

export default IngredientList;
