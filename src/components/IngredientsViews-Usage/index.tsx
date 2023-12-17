import IngredientViews from 'components/CommonComponents/IngredientsViews/IngredientsViews'
import Ingredient0 from 'assets/ingredients/ingredient-0.svg';
import Ingredient1 from 'assets/ingredients/ingredient-1.svg';
import Ingredient2 from 'assets/ingredients/ingredient-2.svg';
import Ingredient3 from 'assets/ingredients/ingredient-3.svg';
import Ingredient4 from 'assets/ingredients/ingredient-4.svg';

const IngredientsViewsPage = () => {
    const colorList = ['#BABEF4', '#FFCDBE', '#D2D000'];
    const timeList = ['30 min', '1 hour', '1 hour 30 min'];
    const imagesList = [
    [Ingredient0, Ingredient1, Ingredient1, Ingredient1],
    [Ingredient2],
    [Ingredient3, Ingredient4]
    ];
    return (
        <IngredientViews colorList={colorList} timeList={timeList} imagesList={imagesList}/>
    )
}

export default IngredientsViewsPage
