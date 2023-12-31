import './Common.css'
import { Ingredient } from 'api'

interface IngredientsListProps {
    title: string
    ingredients: Ingredient[]
}

const IngredientsList = (props: IngredientsListProps) => {
    const { title, ingredients } = props

    return (
        <div className='ingredients-list'>
            <div className='list-title'>
                <span className='list-title-text'>{title}</span>
            </div>
            <div className='list-content'>
                {ingredients.map((ingredient, index) => (
                    <div className='list-item' key={index}>
                        <img src={ingredient.ingredientImage} alt={ingredient.ingredientName} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default IngredientsList