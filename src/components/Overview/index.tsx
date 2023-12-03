import Header from 'components/CommonComponents/Header'
import Calendar from './Calender'
import IngredientsList from 'components/CommonComponents/IngredientsList'
import Analysis from './Analysis'
import './Overview.css'

const Overview = () => {
    return (
        <div id="overview">
            <Header title='Overview' />
            <div className='content'>
                <Calendar />
                <IngredientsList title="Today I Cooked ..." />
                <Analysis />
            </div>
        </div>
    )
}

export default Overview
