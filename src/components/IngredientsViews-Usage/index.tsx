import IngredientViews from 'components/CommonComponents/IngredientsViews/IngredientsViews'
import {IngredientsBoxProps} from 'components/CommonComponents/IngredientsViews/IngredientsBox'
import Ingredient0 from 'assets/ingredients/ingredient-0.svg';
import Ingredient1 from 'assets/ingredients/ingredient-1.svg';
import Ingredient2 from 'assets/ingredients/ingredient-2.svg';
import Ingredient3 from 'assets/ingredients/ingredient-3.svg';
import Ingredient4 from 'assets/ingredients/ingredient-4.svg';

const IngredientsViewsPage = () => {
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
}

export default IngredientsViewsPage
