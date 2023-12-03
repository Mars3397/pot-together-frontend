import { ReactComponent as Mushrooms } from 'assets/Mushrooms.svg'
import './Common.css'

interface IngredientsListProps {
    title: string
}

const IngredientsList = (props: IngredientsListProps) => {
    const { title } = props

    return (
        <div className='ingredients-list'>
            <div className='list-title'>
                <span className='list-title-text'>{title}</span>
            </div>
            <div className='list-content'>
                <div className='list-item'>
                    <Mushrooms />
                </div>
                <div className='list-item'>
                    <Mushrooms />
                </div>
                <div className='list-item'>
                    <Mushrooms />
                </div>
            </div>
        </div>
    )
}

export default IngredientsList