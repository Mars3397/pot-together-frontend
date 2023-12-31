import { useState } from 'react'
import './Common.css'
import WrittenRecord from './WrittenRecord'
import { Ingredient } from 'api'

interface IngredientsListProps {
    title: string
    ingredients: Ingredient[]
}

const IngredientsList = (props: IngredientsListProps) => {
    const { title, ingredients } = props
    const [open, setOpen] = useState(false);
    const [selectIngredient, setSelectIngredient] = useState<Ingredient | null>(null);

    const handleOnClose = () => {
        setOpen(false);
        setSelectIngredient(null);
    };

    const handleOnClick = (ingredient: Ingredient) => {
        setOpen(true);
        setSelectIngredient(ingredient);
    };

    return (
        <div className='ingredients-list'>
            <div className='list-title'>
                <span className='list-title-text'>{title}</span>
            </div>
            <div className='list-content'>
                {ingredients.map((ingredient, index) => (
                    <div className='list-item' key={index} onClick={
                        () => handleOnClick(ingredient)
                    }>
                        <img src={ingredient.ingredientImage} alt={ingredient.ingredientName} />
                    </div>
                ))}
            </div>
            <WrittenRecord
                open={open}
                handleOnClose={handleOnClose}
                date={selectIngredient?.finishTime ? new Date(selectIngredient?.finishTime * 1000) : new Date()}
                interval={selectIngredient?.interval || 0}
                image={selectIngredient?.image || ''}
                caption={selectIngredient?.caption || ''}
                ingredientImg={selectIngredient?.ingredientImage || ''}
            />
        </div>
    )
}

export default IngredientsList