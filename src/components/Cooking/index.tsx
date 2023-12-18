import { useParams } from 'react-router-dom';
import CookingPage from './CookingPage';
import CookingDone from './CookingDone';
import './Cooking.css';

const Cooking = () => {
    const { status } = useParams();
    return (
        <div>
            {status === 'in-progress' ? <CookingPage /> : <CookingDone />}
        </div>
        
    )
}

export default Cooking;